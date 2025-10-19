import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { StatusEnum } from 'src/utilities/enums';
import { InformasiDto } from './informasi.dto';
import { IJWTPayload } from 'src/types';
import { EncryptionService } from 'src/lib/encryption.service';

@Injectable()
export class InformasiService {
  private readonly logger = new Logger(InformasiService.name);

  constructor(
    private prisma: PrismaService,
    private encryptionService: EncryptionService,
  ) {}

  async detail(body: IJWTPayload): Promise<any> {
    const { uuid } = body;

    try {
      // Validate UUID format before database query
      const user = await this.prisma.user.findFirst({
        select: {
          peserta: {
            select: {
              uuid: true,
              nama_lengkap: true,
              kewarganegaraan: true,
              nik: true,
              tanggal_lahir: true,
              jenis_kelamin: true,
              no_hp: true,
              email: true,
              status: true,
            },
          },
        },
        where: {
          uuid: uuid,
        },
      });

      if (!user) {
        throw new HttpException(
          { message: 'User not found' },
          HttpStatus.NOT_FOUND,
        );
      }

      // Decrypt NIK before returning
      let decryptedNik = null;
      if (user.peserta?.nik) {
        try {
          decryptedNik = this.encryptionService.decryptNIKData(user.peserta.nik);
        } catch (decryptError) {
          this.logger.error(`Failed to decrypt NIK for user ${uuid}:`, decryptError.message);
          // Return null for NIK if decryption fails rather than throwing error
          decryptedNik = null;
        }
      }

      return {
        uuid: user.peserta?.uuid,
        nama_lengkap: user.peserta?.nama_lengkap,
        kewarganegaraan: user.peserta?.kewarganegaraan,
        nik: decryptedNik, // Return decrypted NIK
        tanggal_lahir: user.peserta?.tanggal_lahir,
        jenis_kelamin: user.peserta?.jenis_kelamin,
        no_hp: user.peserta?.no_hp,
        email: user.peserta?.email,
        status: user.peserta?.status,
      };
    } catch (error) {
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
}
