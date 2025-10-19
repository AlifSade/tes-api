import { Module } from '@nestjs/common';
import { RegistrasiController } from './registrasi/registrasi.controller';
import { RegistrasiService } from './registrasi/registrasi.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { EncryptionService } from 'src/lib/encryption.service';
import { SendEmailService } from 'src/partners/send-email/send-email.service';
import { WhatsAppService } from 'src/partners/whatsapp/whatsapp.service';
import { HttpModule } from '@nestjs/axios';
import { ActivateController } from './activate/activate.controller';
import { ActivateService } from './activate/activate.service';
import { InformasiController } from './informasi/informasi.controller';
import { InformasiService } from './informasi/informasi.service';

@Module({
  imports: [HttpModule],
  controllers: [RegistrasiController, ActivateController, InformasiController],
  providers: [
    RegistrasiService, 
    PrismaService, 
    EncryptionService,
    SendEmailService,
    WhatsAppService,
    ActivateService,
    InformasiService,
  ],
})
export class PesertaModule {}
