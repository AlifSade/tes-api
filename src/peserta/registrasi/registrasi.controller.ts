import {
  Body,
  Controller,
  Logger,
  Post,
  Request,
  UseGuards,
  Param,
  Get,
  Response,
} from '@nestjs/common';
import { RegistrasiService } from './registrasi.service';
import { RegistrasiDto } from './registrasi.dto';
import { DecryptNikDto } from './decrypt-nik.dto';
import { EncryptionService } from 'src/lib/encryption.service';
import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import { OKException } from 'src/utilities/ok.exception';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CheckNikDto {
  @IsNotEmpty()
  @IsString()
  nik: string;
}

export class CheckMultipleNiksDto {
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  niks: string[];
}

@Controller('peserta/registrasi')
export class RegistrasiController {
  constructor(
    private registrasiService: RegistrasiService,
    private encryptionService: EncryptionService,
  ) {}

  private readonly logger = new Logger(RegistrasiController.name, {
    timestamp: true,
  });

  @UseGuards(AuthGuard)
  @Post('/new')
  async registrasi(
    @Request() request: ExpressRequest,
    @Body() body: RegistrasiDto,
  ) {
    const result = await this.registrasiService.registrasi(body);

    throw new OKException(result, 'Success');
  }

  @UseGuards(AuthGuard)
  @Post('/decrypt-nik')
  async decryptNIK(
    @Request() request: ExpressRequest,
    @Body() body: DecryptNikDto,
  ) {
    try {
      const decryptedNik = this.encryptionService.decryptNIKData(
        body.encrypted_nik,
      );

      throw new OKException(
        { decrypted_nik: decryptedNik },
        'NIK decrypted successfully',
      );
    } catch (error) {
      this.logger.error('Failed to decrypt NIK:', error);
      throw new Error('Failed to decrypt NIK');
    }
  }

  @UseGuards(AuthGuard)
  @Post('/peserta/:uuid/decrypt')
  async getPesertaWithDecryptedNik(
    @Request() request: ExpressRequest,
    @Param('uuid') uuid: string,
  ) {
    try {
      const result =
        await this.registrasiService.getPesertaWithDecryptedNik(uuid);

      throw new OKException(
        result,
        'Peserta data retrieved with decrypted NIK',
      );
    } catch (error) {
      this.logger.error('Failed to get peserta with decrypted NIK:', error);
      throw error;
    }
  }

  @Post('/verify/:userUuid')
  async verifyAccount(
    @Request() request: ExpressRequest,
    @Param('userUuid') userUuid: string,
  ) {
    try {
      const result = await this.registrasiService.verifyUserAccount(userUuid);

      throw new OKException(result, 'Account verified successfully');
    } catch (error) {
      this.logger.error('Failed to verify account:', error);
      throw error;
    }
  }

  @UseGuards(AuthGuard)
  @Post('/check-nik')
  async checkNikExists(
    @Request() request: ExpressRequest,
    @Body() body: CheckNikDto,
  ) {
    try {
      // Use optimized hash-based check for better performance
      await this.registrasiService.checkNikExistsOptimized(body.nik);

      throw new OKException(
        {
          nik: body.nik,
          available: true,
          message: 'NIK tersedia untuk registrasi',
          method: 'hash-based',
        },
        'NIK is available for registration',
      );
    } catch (error) {
      // If it's a duplicate NIK error, return it as a conflict response
      if (error.status === 409) {
        throw new OKException(
          {
            nik: body.nik,
            available: false,
            message: error.response.message,
            existing_peserta: error.response.existing_peserta,
            method: 'hash-based',
          },
          'NIK already exists',
        );
      }

      this.logger.error('Failed to check NIK:', error);
      throw error;
    }
  }

  @UseGuards(AuthGuard)
  @Post('/check-multiple-niks')
  async checkMultipleNiks(
    @Request() request: ExpressRequest,
    @Body() body: CheckMultipleNiksDto,
  ) {
    try {
      const result = await this.registrasiService.checkMultipleNiks(body.niks);

      throw new OKException(
        {
          total_checked: body.niks.length,
          available_count: result.available.length,
          existing_count: result.existing.length,
          available_niks: result.available,
          existing_niks: result.existing,
        },
        'NIK availability check completed',
      );
    } catch (error) {
      this.logger.error('Failed to check multiple NIKs:', error);
      throw error;
    }
  }

  @Get('cek')
  async cek(@Response() res: any) {
    const signin = await this.registrasiService.cekPassword();

    throw new OKException(signin, 'Success');
  }
}
