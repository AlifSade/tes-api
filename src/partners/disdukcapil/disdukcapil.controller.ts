import {
  Body,
  Controller,
  Logger,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import { DisdukcapilService } from './disdukcapil.service';
import { OKException } from 'src/utilities/ok.exception';
import { CekNIK } from './disdukcapil.dto';

@Controller('disdukcapil')
export class DisdukcapilController {
  constructor(private disdukcapilService: DisdukcapilService) {}

  private readonly logger = new Logger(DisdukcapilController.name, {
    timestamp: true,
  });

  @UseGuards(AuthGuard)
  @Post('cek-nik')
  async cekNIk(@Request() request: ExpressRequest, @Body() body: CekNIK) {
    const result = await this.disdukcapilService.checkNIK(body);

    throw new OKException(result, 'Success');
  }
}
