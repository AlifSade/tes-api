import {
  Body,
  Controller,
  Logger,
  Post,
  Request,
  UseGuards,
  Param,
} from '@nestjs/common';
import { EncryptionService } from 'src/lib/encryption.service';
import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import { OKException } from 'src/utilities/ok.exception';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ActivateService } from './activate.service';
import { ActivateDto } from './activate.dto';

@Controller('peserta/activate')
export class ActivateController {
  constructor(private activateService: ActivateService) {}

  private readonly logger = new Logger(ActivateController.name, {
    timestamp: true,
  });

  @UseGuards(AuthGuard)
  @Post('/new-user')
  async newUser(@Request() request: ExpressRequest, @Body() body: ActivateDto) {
    const result = await this.activateService.newUser(body);

    throw new OKException(result, 'Success');
  }
}
