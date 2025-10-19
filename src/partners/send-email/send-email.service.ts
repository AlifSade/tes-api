import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
const nodemailer = require('nodemailer');

export interface RegistrationCredentials {
  to: string;
  nama: string;
  username: string;
  password: string;
  verificationUrl: string;
}

@Injectable()
export class SendEmailService {
  private readonly logger = new Logger(SendEmailService.name);
  private transporter: any;

  constructor(private httpService: HttpService) {
    this.initializeTransporter();
  }

  private initializeTransporter() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_AUTH,
      },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });
  }

  async sendRegistrationCredentials(credentials: RegistrationCredentials) {
    try {
      const emailTemplate = this.generateEmailTemplate(credentials);

      const mailOptions = {
        from: {
          name: 'Direktorat Kursus dan Pelatihan - Uji Kompetensi',
          address: 'no-reply.kursus@outlook.com',
        },
        to: credentials.to,
        subject: 'Username dan Password Akun Uji Kompetensi - Verifikasi Akun',
        html: emailTemplate,
        replyTo: 'no-reply.kursus@outlook.com',
      };

      this.logger.log('Sending registration email:', {
        to: credentials.to,
        subject: mailOptions.subject,
      });

      const result = await this.transporter.sendMail(mailOptions);

      this.logger.log('Email sent successfully:', {
        messageId: result.messageId,
        to: credentials.to,
        successAt: new Date().toISOString(),
      });

      return {
        status: true,
        msg: 'Berhasil kirim email',
        email_target: credentials.to,
        success_at: new Date().toISOString().replace('T', ' ').substring(0, 19),
        messageId: result.messageId,
      };
    } catch (error) {
      this.logger.error('Failed to send registration email:', error);

      return {
        status: false,
        msg: `Mailer error: ${error.message}`,
        error_at: new Date().toISOString().replace('T', ' ').substring(0, 19),
        error: error.message,
      };
    }
  }

  // Generic email sending method similar to PHP send_outlook function
  async sendOutlook(emailTarget: string, data: { judul: string; isi: string }) {
    try {
      const mailOptions = {
        from: {
          name: 'Direktorat Kursus dan Pelatihan - Uji Kompetensi',
          address: 'no-reply.kursus@outlook.com',
        },
        to: emailTarget,
        subject: data.judul,
        html: data.isi,
        replyTo: 'no-reply.kursus@outlook.com',
      };

      this.logger.log('Sending outlook email:', {
        to: emailTarget,
        subject: data.judul,
      });

      const result = await this.transporter.sendMail(mailOptions);

      this.logger.log('Outlook email sent successfully:', {
        messageId: result.messageId,
        to: emailTarget,
        successAt: new Date().toISOString(),
      });

      return {
        status: true,
        msg: 'Berhasil kirim email',
        email_target: emailTarget,
        success_at: new Date().toISOString().replace('T', ' ').substring(0, 19),
        messageId: result.messageId,
      };
    } catch (error) {
      this.logger.error('Failed to send outlook email:', error);

      return {
        status: false,
        msg: `Mailer error: ${error.message}`,
        error_at: new Date().toISOString().replace('T', ' ').substring(0, 19),
        error: error.message,
      };
    }
  }

  private generateEmailTemplate(credentials: RegistrationCredentials): string {
    const loginUrl = 'https://banper.binsuslat.kemdikbud.go.id/ujk/login';

    return `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Username dan Password Akun Uji Kompetensi</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #f8f9fa;
            padding: 20px;
            text-align: center;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .content {
            background-color: #ffffff;
            padding: 20px;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .credentials {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .credential-item {
            margin: 10px 0;
        }
        .label {
            font-weight: bold;
            color: #495057;
        }
        .value {
            background-color: #e9ecef;
            padding: 8px 12px;
            border-radius: 4px;
            font-family: monospace;
            color: #6c757d;
            margin-left: 10px;
        }
        .login-link {
            display: inline-block;
            background-color: #007bff;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 5px;
            margin: 15px 0;
        }
        .login-link:hover {
            background-color: #0056b3;
        }
        .verify-link {
            display: inline-block;
            background-color: #28a745;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 5px;
            margin: 15px 0;
        }
        .verify-link:hover {
            background-color: #218838;
        }
        .verification-section {
            background-color: #e8f5e8;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
            border-left: 4px solid #28a745;
        }
        .footer {
            text-align: center;
            color: #6c757d;
            font-size: 14px;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
        }
        .sender {
            color: #007bff;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="header">
        <h2>Username dan Password Akun Uji Kompetensi</h2>
        <p><span class="sender">Direktorat Kursus dan Pelatihan - Uji Kompetensi</span></p>
    </div>
    
    <div class="content">
        <p>Kepada Yth. <strong>${credentials.nama}</strong>,</p>
        
        <p>Berikut adalah akun username dan password untuk akun Anda:</p>
        
        <div class="credentials">
            <div class="credential-item">
                <span class="label">Username:</span>
                <span class="value">${credentials.username}</span>
            </div>
            <div class="credential-item">
                <span class="label">Password:</span>
                <span class="value">${credentials.password}</span>
            </div>
        </div>
        
        <p>Untuk login silakan menuju Link: <a href="${loginUrl}" class="login-link">${loginUrl}</a></p>
        
        <div class="verification-section">
            <h3 style="color: #28a745; margin-top: 0;">🔐 Verifikasi Akun Anda</h3>
            <p><strong>Penting!</strong> Untuk mengaktifkan akun Anda, silakan klik tombol di bawah ini:</p>
            <a href="${credentials.verificationUrl}" class="verify-link">Verifikasi & Aktifkan Akun</a>
            <p style="font-size: 12px; color: #6c757d; margin-top: 10px;">
                Atau salin link ini ke browser Anda: ${credentials.verificationUrl}
            </p>
        </div>
        
        <p><strong>Catatan Penting:</strong></p>
        <ul>
            <li>Simpan informasi login ini dengan aman</li>
            <li>Jangan bagikan username dan password Anda kepada siapapun</li>
            <li>Verifikasi akun Anda sebelum melakukan login pertama kali</li>
            <li>Jika mengalami kendala, silakan hubungi admin sistem</li>
        </ul>
    </div>
    
    <div class="footer">
        <p>-- Admin Uji Kompetensi --</p>
        <p>Direktorat Kursus dan Pelatihan<br>
        Kementerian Pendidikan dan Kebudayaan</p>
    </div>
</body>
</html>
    `.trim();
  }

  // Alternative plain text version
  generatePlainTextTemplate(credentials: RegistrationCredentials): string {
    const loginUrl = 'https://banper.binsuslat.kemdikbud.go.id/ujk/login';

    return `
Username dan Password Akun Uji Kompetensi - Verifikasi Akun

Kepada Yth. ${credentials.nama},

Berikut adalah akun username dan password untuk akun Anda:

Username: ${credentials.username}
Password: ${credentials.password}

Untuk login silakan menuju Link: ${loginUrl}

🔐 VERIFIKASI AKUN ANDA
Penting! Untuk mengaktifkan akun Anda, silakan buka link berikut:
${credentials.verificationUrl}

Catatan Penting:
- Simpan informasi login ini dengan aman
- Jangan bagikan username dan password Anda kepada siapapun
- Verifikasi akun Anda sebelum melakukan login pertama kali
- Jika mengalami kendala, silakan hubungi admin sistem

-- Admin Uji Kompetensi --
Direktorat Kursus dan Pelatihan
Kementerian Pendidikan dan Kebudayaan
    `.trim();
  }
}
