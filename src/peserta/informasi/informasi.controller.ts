import {
  Body,
  Controller,
  Logger,
  Post,
  Request,
  UseGuards,
  Param,
  ForbiddenException,
  Get,
} from '@nestjs/common';
import { EncryptionService } from 'src/lib/encryption.service';
import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import { OKException } from 'src/utilities/ok.exception';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { InformasiService } from './informasi.service';
import { InformasiDto } from './informasi.dto';
import { StatusCode } from 'src/utilities/enums';

@Controller('peserta/informasi')
export class InformasiController {
  constructor(private informasiService: InformasiService) {}

  private readonly logger = new Logger(InformasiController.name, {
    timestamp: true,
  });

  @UseGuards(AuthGuard)
  @Get('/detail')
  async newUser(
    @Request() request: ExpressRequest,
    // @Body() body: InformasiDto,
  ) {
    if (request.user) {
      const result = await this.informasiService.detail(request.user);

      throw new OKException(result, 'Success');
    } else {
      const errors = {
        status: StatusCode.failed,
        message: 'Please Try again',
      };
      throw new ForbiddenException(errors);
    }
  }
}
