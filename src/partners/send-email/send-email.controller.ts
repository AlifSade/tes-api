import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { SendEmailService } from './send-email.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { OKException } from 'src/utilities/ok.exception';

export class SendEmailDto {
  email_target: string;
  judul: string;
  isi: string;
}

@Controller('send-email')
export class SendEmailController {
  constructor(private sendEmailService: SendEmailService) {}

  @UseGuards(AuthGuard)
  @Post('outlook')
  async sendOutlook(@Body() body: SendEmailDto) {
    try {
      const result = await this.sendEmailService.sendOutlook(body.email_target, {
        judul: body.judul,
        isi: body.isi,
      });

      throw new OKException(result, result.status ? 'Email sent successfully' : 'Email sending failed');
    } catch (error) {
      throw error;
    }
  }
}
