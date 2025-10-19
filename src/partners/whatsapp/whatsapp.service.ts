import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

export interface WhatsAppCredentials {
  phone: string;
  nik: string;
  nama: string;
  username: string;
  password: string;
  verificationUrl: string;
}

export interface WhatsAppSendData {
  phone: string;
  message: string;
  secret?: boolean;
  priority?: boolean;
}

@Injectable()
export class WhatsAppService {
  private readonly logger = new Logger(WhatsAppService.name);
  private readonly wablasApiUrl = process.env.WHATSAPP_URL;
  private readonly wablasToken = process.env.WHATSAPP_KEY;

  constructor(private httpService: HttpService) {}

  async send(phone: string, message: string): Promise<any> {
    try {
      const data: WhatsAppSendData = {
        phone: phone,
        message: message,
        secret: false,
        priority: false,
      };

      this.logger.log('Sending WhatsApp message:', {
        phone: phone,
        messageLength: message.length,
        apiUrl: this.wablasApiUrl,
      });

      const response = await firstValueFrom(
        this.httpService.post(this.wablasApiUrl!!, data, {
          headers: {
            Authorization: this.wablasToken,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          timeout: 30000, // 30 seconds timeout
        }),
      );

      this.logger.log('WhatsApp message sent successfully:', {
        phone: phone,
        response: response.data,
        timestamp: new Date().toISOString(),
      });

      return {
        status: true,
        message: 'WhatsApp message sent successfully',
        phone: phone,
        response: response.data,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      this.logger.error('Failed to send WhatsApp message:', {
        phone: phone,
        error: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });

      return {
        status: false,
        message: 'Failed to send WhatsApp message',
        phone: phone,
        error: error.message,
        timestamp: new Date().toISOString(),
      };
    }
  }

  async sendRegistrationCredentials(
    credentials: WhatsAppCredentials,
  ): Promise<any> {
    try {
      const message = this.generateWhatsAppMessage(credentials);

      // Send to NIK (which should be a phone number)
      const result = await this.send(credentials.phone, message);

      this.logger.log('Registration credentials sent via WhatsApp:', {
        nik: credentials.nik,
        phone: credentials.phone,
        nama: credentials.nama,
        success: result.status,
      });

      return result;
    } catch (error) {
      this.logger.error(
        'Failed to send WhatsApp registration credentials:',
        error,
      );
      return {
        status: false,
        message: 'Failed to send WhatsApp registration credentials',
        error: error.message,
        timestamp: new Date().toISOString(),
      };
    }
  }

  private generateWhatsAppMessage(credentials: WhatsAppCredentials): string {
    const loginUrl = 'https://banper.binsuslat.kemdikbud.go.id/ujk/login';

    return `*Username dan Password Akun Uji Kompetensi - Verifikasi Akun*

Halo ${credentials.nama} 👋

Berikut adalah akun username dan password untuk akun Anda:

*Username:* ${credentials.username}
*Password:* ${credentials.password}

Untuk login silakan menuju Link:
${loginUrl}

🔐 *VERIFIKASI AKUN ANDA*
Penting! Untuk mengaktifkan akun Anda, silakan buka link berikut:
${credentials.verificationUrl}

📝 *Catatan Penting:*
• Simpan informasi login ini dengan aman
• Jangan bagikan username dan password Anda kepada siapapun
• Verifikasi akun Anda sebelum melakukan login pertama kali
• Jika mengalami kendala, silakan hubungi admin sistem

--
*Admin Uji Kompetensi*
Direktorat Kursus dan Pelatihan
Kementerian Pendidikan dan Kebudayaan`.trim();
  }

  // Alternative format for different WhatsApp APIs
  generateWhatsAppTemplate(credentials: WhatsAppCredentials): any {
    return {
      to: credentials.nik,
      type: 'text',
      text: {
        body: this.generateWhatsAppMessage(credentials),
      },
    };
  }
}
