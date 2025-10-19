import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { RegistrasiDto } from './registrasi.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EncryptionService } from 'src/lib/encryption.service';
import { SendEmailService } from 'src/partners/send-email/send-email.service';
import { WhatsAppService } from 'src/partners/whatsapp/whatsapp.service';
import { v4 as uuidv4 } from 'uuid';
import { DateTime } from 'luxon';
import {
  generateOTP,
  hashPassword,
  generateUserFriendlyPassword,
} from 'src/lib/utils';

@Injectable()
export class RegistrasiService {
  private readonly logger = new Logger(RegistrasiService.name);

  constructor(
    private prisma: PrismaService,
    private encryptionService: EncryptionService,
    private sendEmailService: SendEmailService,
    private whatsAppService: WhatsAppService,
  ) {}
  async registrasi(payload: RegistrasiDto) {
    const {
      email,
      nik,
      jenis_kelamin,
      kewarganegaraan,
      nama_lengkap,
      no_hp,
      tanggal_lahir,
    } = payload;

    try {
      // Check if NIK already exists before proceeding (optimized hash-based check)
      await this.checkNikExistsOptimized(nik);

      // Convert tanggal_lahir to Date
      const tglLahir = DateTime.fromFormat(
        tanggal_lahir,
        'dd-MM-yyyy',
      ).toJSDate();

      // Encrypt NIK and create hash before saving to database
      const encryptedNik = this.encryptionService.encryptNIKData(nik);
      const nikHash = await this.createNikHash(nik);

      // Format phone number with country code
      const formattedPhoneNumber = this.formatPhoneNumber(no_hp);

      // Generate username and use provided password
      const username = nik;
      const password = payload.password || generateUserFriendlyPassword(12); // Use provided password or generate strong password
      const hashedPassword = await hashPassword(password);

      // Use transaction to create peserta and user atomically
      const result = await this.prisma.$transaction(async (prisma) => {
        // Create peserta first with both encrypted NIK and hash
        const peserta = await prisma.peserta.create({
          data: {
            uuid: uuidv4(),
            nik: encryptedNik,
            nik_hash: nikHash,
            email,
            jenis_kelamin,
            nama_lengkap,
            tanggal_lahir: tglLahir,
            kewarganegaraan,
            no_hp: formattedPhoneNumber,
          },
        });

        // Create user account linked to profile
        const user = await prisma.user.create({
          data: {
            uuid: uuidv4(),
            username,
            peserta_id: peserta.id, // Link user to profile
            token: hashedPassword,
            status: 1, // Active status
            created_by: 'system',
          },
        });

        // Send credentials via email and WhatsApp only if both peserta and user are created successfully
        await this.sendCredentials(peserta, user, {
          username,
          password,
          phone: no_hp,
        });

        return {
          peserta,
          user,
          credentials: {
            username,
            password,
          },
        };
      });

      this.logger.log(
        `Registration successful for peserta: ${result.peserta.uuid}`,
      );

      return {
        message: 'Data Berhasil Disimpan - Registrasi Sukses',
        peserta_uuid: result.peserta.uuid,
        user_uuid: result.user.uuid,
        credentials_sent: true,
      };
    } catch (error) {
      this.logger.error('Registration failed:', error);
      throw new HttpException(
        {
          message: error.message || 'Terjadi kesalahan pada server',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private formatPhoneNumber(noHp: string): string | null {
    if (!noHp) {
      return null; // Return null if no phone number provided
    }

    // Clean phone number: remove all non-digit characters
    const cleanPhone = noHp.replace(/[^\d]/g, '');

    // Handle different Indonesian phone number formats
    if (cleanPhone.startsWith('62')) {
      // Already has country code 62, add + prefix
      return `+${cleanPhone}`;
    } else if (cleanPhone.startsWith('0')) {
      // Local format starting with 0, replace 0 with +62
      return `+62${cleanPhone.substring(1)}`;
    } else if (cleanPhone.startsWith('8')) {
      // Format without 0 prefix, add +62
      return `+62${cleanPhone}`;
    } else if (cleanPhone.length >= 10) {
      // Assume it's a valid Indonesian number, add +62
      return `+62${cleanPhone}`;
    } else {
      // Invalid format, return as is with +62 prefix
      return `+62${cleanPhone}`;
    }
  }

  private generateUsername(noHp: string): string {
    // Generate username from phone number (no_hp)
    if (!noHp) {
      // Fallback if no phone number provided
      const randomUsername = generateOTP(8);
      return `user${randomUsername}`;
    }

    // Clean phone number: remove +, spaces, and keep only digits
    const cleanPhone = noHp.replace(/[^\d]/g, '');

    // Use last 8 digits of phone number
    const phoneSuffix = cleanPhone.slice(-8);

    // Add 'hp' prefix to make it clear it's phone-based
    return `hp${phoneSuffix}`;
  }

  private async generateUniqueUsername(noHp: string): Promise<string> {
    let username = this.generateUsername(noHp);
    let counter = 1;

    // Check if username already exists and generate unique one
    while (true) {
      const existingUser = await this.prisma.user.findUnique({
        where: { username },
      });

      if (!existingUser) {
        return username; // Username is available
      }

      // Username exists, append counter
      const baseUsername = this.generateUsername(noHp);
      username = `${baseUsername}${counter}`;
      counter++;

      // Prevent infinite loop (max 999 attempts)
      if (counter > 999) {
        // Fallback to completely random username
        const randomSuffix = generateOTP(6);
        return `hp${randomSuffix}`;
      }
    }
  }

  private async sendCredentials(
    peserta: any,
    user: any,
    credentials: { username: string; password: string; phone: string },
  ) {
    try {
      // Generate verification URL
      const verificationUrl = `${process.env.BASE_URL || 'http://localhost:3000'}/peserta/${user.uuid}`;

      // Send email with credentials and verification link
      await this.sendEmailService.sendRegistrationCredentials({
        to: peserta.email,
        nama: peserta.nama_lengkap,
        username: credentials.username,
        password: credentials.password,
        verificationUrl,
      });

      // Send WhatsApp message using NIK (decrypted from peserta record)
      if (peserta.nik) {
        const decryptedNik = this.encryptionService.decryptNIKData(peserta.nik);
        await this.sendWhatsAppCredentials(
          decryptedNik,
          peserta.nama_lengkap,
          credentials,
          verificationUrl,
        );
      }

      this.logger.log(
        `Credentials sent to ${peserta.email} and NIK with verification link`,
      );
    } catch (error) {
      this.logger.error('Failed to send credentials:', error);
      // Don't throw error here to avoid breaking the registration process
    }
  }

  private async sendWhatsAppCredentials(
    nik: string,
    nama: string,
    credentials: { username: string; password: string; phone: string },
    verificationUrl: string,
  ) {
    try {
      await this.whatsAppService.sendRegistrationCredentials({
        nik,
        nama,
        username: credentials.username,
        password: credentials.password,
        phone: credentials.phone,
        verificationUrl,
      });

      this.logger.log(`WhatsApp credentials sent to NIK ${nik} for ${nama}`);
    } catch (error) {
      this.logger.error(
        `Failed to send WhatsApp credentials to NIK ${nik}:`,
        error,
      );
      // Don't throw error here to avoid breaking the registration process
    }
  }

  async getPesertaWithDecryptedNik(uuid: string) {
    let response = null as unknown;
    const errors: string[] = [];

    try {
      const peserta = await this.prisma.peserta.findUnique({
        where: { uuid },
        select: {
          id: true,
          uuid: true,
          nama_lengkap: true,
          kewarganegaraan: true,
          nik: true, // This will be encrypted
          tanggal_lahir: true,
          jenis_kelamin: true,
          no_hp: true,
          email: true,
          status: true,
          created_at: true,
        },
      });

      if (!peserta) {
        throw new Error('Peserta not found');
      }

      if (!peserta.nik) {
        throw new Error('NIK not found for this peserta');
      }

      // Decrypt the NIK
      const decryptedNik = this.encryptionService.decryptNIKData(peserta.nik);

      response = {
        ...peserta,
        nik: decryptedNik, // Return decrypted NIK
      };
    } catch (error) {
      const errors = {
        message: error.message || 'Terjadi kesalahan pada server',
      };
      throw new HttpException(errors, HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async verifyUserAccount(userUuid: string) {
    try {
      // Find user by UUID
      const user = await this.prisma.user.findUnique({
        where: { uuid: userUuid },
      });

      if (!user) {
        throw new Error('User not found');
      }

      if (user.verified === 1) {
        return {
          message: 'Account is already verified',
          verified: true,
        };
      }

      // Update user verification status
      const updatedUser = await this.prisma.user.update({
        where: { uuid: userUuid },
        data: {
          verified: 1, // Set as verified
          updated_at: new Date(),
        },
      });

      this.logger.log(`Account verified for user: ${userUuid}`);

      return {
        message: 'Account verified successfully',
        verified: true,
        user_uuid: userUuid,
        verified_at: new Date(),
      };
    } catch (error) {
      this.logger.error('Account verification failed:', error);
      throw new HttpException(
        {
          message: error.message || 'Failed to verify account',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  /**
   * Check if NIK already exists by decrypting and comparing all encrypted NIKs
   */
  async checkNikExists(nik: string): Promise<void> {
    try {
      this.logger.log(`Checking if NIK ${nik} already exists...`);

      // Get all encrypted NIKs from the database
      const existingPesertas = await this.prisma.peserta.findMany({
        select: {
          id: true,
          uuid: true,
          nik: true,
          nama_lengkap: true,
          email: true,
        },
        where: {
          nik: {
            not: null as any,
          },
        },
      });

      this.logger.log(
        `Found ${existingPesertas.length} existing peserta records to check`,
      );

      // Decrypt and compare each NIK
      for (const peserta of existingPesertas) {
        if (peserta.nik) {
          try {
            const decryptedNik = this.encryptionService.decryptNIKData(
              peserta.nik,
            );

            if (decryptedNik === nik) {
              this.logger.warn(
                `NIK ${nik} already exists for peserta ${peserta.uuid}`,
              );

              throw new HttpException(
                {
                  message: 'NIK sudah terdaftar dalam sistem',
                  error: 'DUPLICATE_NIK',
                  existing_peserta: {
                    uuid: peserta.uuid,
                    nama_lengkap: peserta.nama_lengkap,
                    email: peserta.email,
                  },
                },
                HttpStatus.CONFLICT,
              );
            }
          } catch (decryptError) {
            // If decryption fails, log the error but continue checking other records
            this.logger.warn(
              `Failed to decrypt NIK for peserta ${peserta.uuid}:`,
              decryptError.message,
            );
            continue;
          }
        }
      }

      this.logger.log(`NIK ${nik} is available for registration`);
    } catch (error) {
      // Re-throw HTTP exceptions (like DUPLICATE_NIK)
      if (error instanceof HttpException) {
        throw error;
      }

      // Log and throw unexpected errors
      this.logger.error(`Error checking NIK existence for ${nik}:`, error);
      throw new HttpException(
        {
          message: 'Terjadi kesalahan saat memeriksa NIK',
          error: 'NIK_CHECK_ERROR',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Optimized NIK check using hash comparison
   * This method is more efficient for large datasets - O(1) lookup
   */
  async checkNikExistsOptimized(nik: string): Promise<void> {
    try {
      this.logger.log(
        `Checking if NIK ${nik} already exists (optimized hash method)...`,
      );

      // Create a hash of the NIK for comparison
      const nikHash = await this.createNikHash(nik);

      // Check if hash exists in the nik_hash field
      const existingPeserta = await this.prisma.peserta.findFirst({
        where: {
          nik_hash: nikHash,
        },
        select: {
          uuid: true,
          nama_lengkap: true,
          email: true,
          nik_hash: true,
        },
      });

      if (existingPeserta) {
        this.logger.warn(
          `NIK ${nik} already exists (hash match for ${existingPeserta.uuid})`,
        );

        throw new HttpException(
          {
            message: 'NIK sudah terdaftar dalam sistem',
            error: 'DUPLICATE_NIK',
            existing_peserta: {
              uuid: existingPeserta.uuid,
              nama_lengkap: existingPeserta.nama_lengkap,
              email: existingPeserta.email,
            },
          },
          HttpStatus.CONFLICT,
        );
      }

      this.logger.log(`NIK ${nik} is available for registration`);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      this.logger.error(
        `Error checking NIK existence (optimized) for ${nik}:`,
        error,
      );
      throw new HttpException(
        {
          message: 'Terjadi kesalahan saat memeriksa NIK',
          error: 'NIK_CHECK_ERROR',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Create a hash of NIK for optimized checking (alternative approach)
   */
  private async createNikHash(nik: string): Promise<string> {
    const crypto = require('crypto');
    return crypto.createHash('sha256').update(nik).digest('hex');
  }

  /**
   * Batch check multiple NIKs for existence
   */
  async checkMultipleNiks(niks: string[]): Promise<{
    available: string[];
    existing: Array<{ nik: string; peserta: any }>;
  }> {
    const result = {
      available: [] as string[],
      existing: [] as Array<{ nik: string; peserta: any }>,
    };

    try {
      this.logger.log(`Checking ${niks.length} NIKs for existence...`);

      // Get all encrypted NIKs
      const existingPesertas = await this.prisma.peserta.findMany({
        select: {
          id: true,
          uuid: true,
          nik: true,
          nama_lengkap: true,
          email: true,
        },
        where: {
          nik: {
            not: null as any,
          },
        },
      });

      // Check each NIK against all existing encrypted NIKs
      for (const nik of niks) {
        let nikExists = false;

        for (const peserta of existingPesertas) {
          if (peserta.nik) {
            try {
              const decryptedNik = this.encryptionService.decryptNIKData(
                peserta.nik,
              );

              if (decryptedNik === nik) {
                result.existing.push({
                  nik,
                  peserta: {
                    uuid: peserta.uuid,
                    nama_lengkap: peserta.nama_lengkap,
                    email: peserta.email,
                  },
                });
                nikExists = true;
                break;
              }
            } catch (decryptError) {
              this.logger.warn(
                `Failed to decrypt NIK for peserta ${peserta.uuid}:`,
                decryptError.message,
              );
              continue;
            }
          }
        }

        if (!nikExists) {
          result.available.push(nik);
        }
      }

      this.logger.log(
        `NIK check completed: ${result.available.length} available, ${result.existing.length} existing`,
      );
      return result;
    } catch (error) {
      this.logger.error('Error in batch NIK checking:', error);
      throw new HttpException(
        {
          message: 'Terjadi kesalahan saat memeriksa NIK',
          error: 'BATCH_NIK_CHECK_ERROR',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async cekPassword() {
    const password = generateUserFriendlyPassword(12); // Use provided password or generate strong password
    const hashedPassword = await hashPassword(password);

    return {
      password,
      hashedPassword,
    };
  }
}
