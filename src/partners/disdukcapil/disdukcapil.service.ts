import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ICekNIKResponse } from 'src/types';
import { CekNIK } from './disdukcapil.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DisdukcapilService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async checkNIK(payload: CekNIK) {
    let response = null as unknown;
    const errors: string[] = [];

    try {
      const username = this.configService.get<string>('DISDUK_USER');
      const password = this.configService.get<string>('DISDUK_PASS');
      const url = this.configService.get<string>('DISDUK_URL')!!;

      console.log({ ...payload, username, password });

      const cekNIK = await firstValueFrom(
        this.httpService.post(
          url,
          { ...payload, username, password },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Cache-Control': 'no-cache',
            },
            timeout: 60000, // 60 detik
            httpsAgent: new (require('https').Agent)({
              rejectUnauthorized: false,
            }),
          },
        ),
      );

      const data = cekNIK.data?.[0] as ICekNIKResponse | undefined;

      if (!data) {
        throw new HttpException(
          { message: 'NIK tidak dapat ditemukan' },
          HttpStatus.BAD_REQUEST,
        );
      }

      if (data.nik !== 'Sesuai') {
        errors.push('NIK tidak sesuai');
      }
      if (!data.nama.startsWith('Sesuai')) {
        errors.push('Nama tidak sesuai');
      }
      if (data.tanggal_lahir !== 'Sesuai') {
        errors.push('Tanggal lahir tidak sesuai');
      }
      if (data.jenis_kelamin !== 'Sesuai') {
        errors.push('Jenis kelamin tidak sesuai');
      }

      if (errors.length > 0) {
        throw new HttpException(
          { message: errors.join(', ') },
          HttpStatus.BAD_REQUEST,
        );
      }

      response = 'Data NIK kamu berhasil di temukan';
    } catch (error) {
      const errors = {
        message: error.message || 'Terjadi kesalahan pada server',
      };
      throw new HttpException(errors, HttpStatus.BAD_REQUEST);
    }

    return response;
  }
}
