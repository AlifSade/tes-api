import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ActivateDto } from './activate.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { StatusEnum } from 'src/utilities/enums';

interface UserActivationResult {
  message: string;
  verified: boolean;
  user_uuid?: string;
  peserta_uuid?: string;
}

interface UserActivationStatus {
  status: number;
  verified: number | null;
  peserta_id: bigint | null;
}

@Injectable()
export class ActivateService {
  private readonly logger = new Logger(ActivateService.name);

  constructor(private prisma: PrismaService) {}

  async newUser(body: ActivateDto): Promise<UserActivationResult> {
    const { uuid } = body;

    try {
      // Validate UUID format before database query
      if (!this.isValidUuid(uuid)) {
        throw new HttpException(
          { message: 'Invalid UUID format' },
          HttpStatus.BAD_REQUEST,
        );
      }

      // Fetch user with minimal required fields
      const user = await this.fetchUserActivationStatus(uuid);

      // Early return for not found user
      if (!user) {
        throw new HttpException(
          { message: 'User not found' },
          HttpStatus.NOT_FOUND,
        );
      }

      // Validate activation eligibility
      this.validateActivationEligibility(user);

      // Perform activation
      const result = await this.performActivation(uuid, user);

      this.logger.log(`User activation successful: ${uuid}`);
      return result;
    } catch (error) {
      this.logger.error(`User activation failed for UUID ${uuid}:`, {
        error: error.message,
        stack: error.stack,
      });

      // Re-throw HTTP exceptions as-is
      if (error instanceof HttpException) {
        throw error;
      }

      // Handle unexpected errors
      throw new HttpException(
        {
          message: 'Internal server error during activation',
          error:
            process.env.NODE_ENV === 'development' ? error.message : undefined,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Validates UUID format
   */
  private isValidUuid(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }

  /**
   * Fetches user activation status with optimized query
   */
  private async fetchUserActivationStatus(
    uuid: string,
  ): Promise<UserActivationStatus | null> {
    return this.prisma.user.findUnique({
      select: {
        status: true,
        verified: true,
        peserta_id: true,
      },
      where: { uuid },
    });
  }

  /**
   * Validates if user is eligible for activation
   */
  private validateActivationEligibility(user: UserActivationStatus): void {
    // Check if already activated
    if (user.verified === StatusEnum.active) {
      throw new HttpException(
        { message: 'User already activated' },
        HttpStatus.CONFLICT,
      );
    }

    // Check if user status allows activation
    if (user.verified !== StatusEnum.inactive) {
      const statusMessages: Record<number, string> = {
        [StatusEnum.active]: 'User is already active',
        [StatusEnum.reject]: 'User account is rejected',
        [StatusEnum.complete]: 'User account is completed',
        [StatusEnum.pending]: 'User account is pending approval',
      };

      throw new HttpException(
        {
          message:
            statusMessages[user.verified as keyof typeof statusMessages] ||
            'User status does not allow activation',
          status: user.status,
        },
        HttpStatus.FORBIDDEN,
      );
    }

    // Check if peserta_id exists
    if (!user.peserta_id) {
      throw new HttpException(
        { message: 'User is not linked to a peserta record' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  /**
   * Performs the actual activation process with optimized transaction
   */
  private async performActivation(
    uuid: string,
    user: UserActivationStatus,
  ): Promise<UserActivationResult> {
    // Use transaction to ensure data consistency for both user and peserta
    const result = await this.prisma.$transaction(async (prisma) => {
      // Double-check user status within transaction to prevent race conditions
      const currentUser = await prisma.user.findUnique({
        select: {
          status: true,
          verified: true,
          peserta_id: true,
        },
        where: { uuid },
      });

      if (!currentUser) {
        throw new HttpException(
          { message: 'User not found during activation' },
          HttpStatus.NOT_FOUND,
        );
      }

      if (currentUser.verified === StatusEnum.active) {
        throw new HttpException(
          { message: 'User already activated' },
          HttpStatus.CONFLICT,
        );
      }

      if (currentUser.verified !== StatusEnum.inactive) {
        throw new HttpException(
          { message: 'User status does not allow activation' },
          HttpStatus.FORBIDDEN,
        );
      }

      if (!currentUser.peserta_id) {
        throw new HttpException(
          { message: 'User is not linked to a peserta record' },
          HttpStatus.BAD_REQUEST,
        );
      }

      // Update both user and peserta in the same transaction
      const [updatedUser, updatedPeserta] = await Promise.all([
        // Update user verification status
        prisma.user.update({
          where: { uuid },
          data: {
            verified: StatusEnum.active,
            updated_at: new Date(),
          },
          select: {
            uuid: true,
            verified: true,
            peserta_id: true,
          },
        }),

        // Update peserta status
        prisma.peserta.update({
          where: { id: currentUser.peserta_id },
          data: {
            status: StatusEnum.active,
            updated_at: new Date(),
          },
          select: {
            id: true,
            uuid: true,
            status: true,
            nama_lengkap: true,
          },
        }),
      ]);

      // Log successful activation
      this.logger.log(
        `Activation successful for user ${uuid} and peserta ${updatedPeserta.uuid}`,
        {
          user_uuid: uuid,
          peserta_uuid: updatedPeserta.uuid,
          peserta_name: updatedPeserta.nama_lengkap,
          activation_time: new Date().toISOString(),
        },
      );

      return {
        message: 'User and peserta activated successfully',
        verified: true,
        user_uuid: uuid,
        peserta_uuid: updatedPeserta.uuid,
        peserta_name: updatedPeserta.nama_lengkap,
      };
    });

    return result;
  }
}
