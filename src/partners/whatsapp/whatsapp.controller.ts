import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { WhatsAppService } from './whatsapp.service';
import { IsNotEmpty, IsString } from 'class-validator';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { OKException } from 'src/utilities/ok.exception';
import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';

export class SendWhatsAppDto {
  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}

@Controller('whatsapp')
export class WhatsAppController {
  constructor(private whatsappService: WhatsAppService) {}

  @UseGuards(AuthGuard)
  @Post('send')
  async sendWhatsApp(
    @Request() request: ExpressRequest,
    @Body() body: SendWhatsAppDto,
  ) {
    try {
      const result = await this.whatsappService.send(body.phone, body.message);

      throw new OKException(
        result,
        result.status
          ? 'WhatsApp message sent successfully'
          : 'WhatsApp message sending failed',
      );
    } catch (error) {
      throw error;
    }
  }
}
