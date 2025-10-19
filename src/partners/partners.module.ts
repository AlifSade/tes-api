import { Module } from '@nestjs/common';
import { DisdukcapilController } from './disdukcapil/disdukcapil.controller';
import { DisdukcapilService } from './disdukcapil/disdukcapil.service';
import { SendEmailController } from './send-email/send-email.controller';
import { SendEmailService } from './send-email/send-email.service';
import { WhatsAppController } from './whatsapp/whatsapp.controller';
import { WhatsAppService } from './whatsapp/whatsapp.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [DisdukcapilController, SendEmailController, WhatsAppController],
  providers: [DisdukcapilService, SendEmailService, WhatsAppService],
})
export class PartnersModule {}
