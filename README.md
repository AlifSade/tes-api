# Kemendikbud API

API untuk sistem Uji Kompetensi Kemendikbud dengan fitur registrasi peserta, enkripsi NIK, dan pengiriman kredensial via email dan WhatsApp.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 atau lebih baru)
- npm atau yarn
- MySQL database
- Git

### Installation

1. **Clone repository**
```bash
git clone <repository-url>
cd api
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup Prisma**
```bash
# Pull database schema
npx prisma db pull

# Generate Prisma client
npx prisma generate
```

4. **Setup Environment Variables**
```bash
cp .env.example .env
```

Edit `.env` file dengan konfigurasi database dan service lainnya:
```env
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
```

5. **Generate Encryption Keys**
```bash
npx ts-node scripts/generate-keys.ts
```

6. **Run the application**
```bash
# Development
npm run start:dev

# Production
npm run build
npm run start:prod
```

## 📊 Database Setup

### Prisma Commands

```bash
# Pull latest schema from database
npx prisma db pull

# Generate Prisma client after schema changes
npx prisma generate

# View database in Prisma Studio
npx prisma studio

# Reset database (HATI-HATI: akan menghapus semua data)
npx prisma db push --force-reset

# Apply migrations
npx prisma migrate deploy
```

### Database Schema

Sistem menggunakan struktur database dengan relasi:

```
PESERTA (Student/Participant)
├── id: BigInt (Primary Key)
├── uuid: String (Unique)
├── nama_lengkap: String
├── nik: String (Encrypted)
├── email: String
├── no_hp: String (+62 format)
└── ... other fields

PROFILE (User Profile)
├── id: BigInt (Primary Key)
├── uuid: String (Unique)
├── nasabah_id: BigInt → peserta.id (Foreign Key)
├── is_default: Boolean
└── ... other fields

USER (Login Account)
├── id: BigInt (Primary Key)
├── uuid: String (Unique)
├── username: String (hp + phone digits)
├── peserta_id: BigInt → profile.id (Foreign Key)
├── token: String (bcrypt hashed password)
└── ... other fields
```

**Relationship Chain:**
- `USER.peserta_id` → `PROFILE.id`
- `PROFILE.nasabah_id` → `PESERTA.id`

## 🔐 Security Features

### NIK Encryption

Sistem menggunakan enkripsi RSA-OAEP untuk melindungi data NIK:

```bash
# Generate encryption keys (otomatis saat pertama kali)
npx ts-node scripts/generate-keys.ts
```

Keys akan disimpan di `src/keys/`:
- `public.pem` - Public key untuk enkripsi
- `private.pem` - Private key untuk dekripsi

### Password Hashing

Password user di-hash menggunakan bcrypt dengan salt rounds.

## 📧 Email & WhatsApp Integration

### Email Service

Template email otomatis dikirim saat registrasi dengan:
- Username dan password
- Link login
- Instruksi keamanan

### WhatsApp Service

Pesan WhatsApp dikirim dengan format yang sama untuk notifikasi cepat.

## 🛠️ Development

### Project Structure

```
src/
├── auth/                 # Authentication modules
├── lib/                  # Utility libraries
│   ├── encryption.service.ts
│   └── utils.ts
├── partners/             # External service integrations
│   ├── send-email/
│   └── whatsapp/
├── peserta/              # Participant management
│   └── registrasi/
├── prisma/               # Database service
└── utilities/            # Common utilities
```

### Available Scripts

```bash
# Development
npm run start:dev

# Build
npm run build

# Start production
npm run start:prod

# Test
npm run test
npm run test:e2e

# Lint
npm run lint

# Format code
npm run format
```

## 📡 API Endpoints

### Registration

**POST** `/peserta/registrasi/new`
- Registrasi peserta baru
- Membuat akun user dengan username dari nomor HP
- Mengirim kredensial via email dan WhatsApp

**POST** `/peserta/registrasi/decrypt-nik`
- Dekripsi NIK untuk keperluan admin

**POST** `/peserta/registrasi/peserta/:uuid/decrypt`
- Ambil data peserta dengan NIK terdekripsi

### Request/Response Examples

**Registration Request:**
```json
{
  "nik": "1234567890123456",
  "kewarganegaraan": "WNI",
  "nama_lengkap": "John Doe",
  "tanggal_lahir": "01-01-1990",
  "jenis_kelamin": "L",
  "no_hp": "081234567890",
  "email": "john@example.com"
}
```

**Registration Response:**
```json
{
  "message": "Data Berhasil Disimpan - Registrasi Sukses",
  "peserta_uuid": "uuid-string",
  "user_uuid": "uuid-string",
  "credentials_sent": true
}
```

## 🔧 Configuration

### Environment Variables

```env
# Database
DATABASE_URL="mysql://username:password@localhost:3306/database_name"

# Application
PORT=3000
NODE_ENV=development

# Email Service (untuk production)
EMAIL_API_KEY=your_email_api_key
EMAIL_FROM=noreply@kemendikbud.go.id

# WhatsApp Service (untuk production)
WHATSAPP_API_KEY=your_whatsapp_api_key
WHATSAPP_PHONE_NUMBER=+6281234567890
```

### Phone Number Format

Sistem otomatis memformat nomor HP dengan kode negara +62:

| Input | Stored in Database |
|-------|-------------------|
| `081234567890` | `+6281234567890` |
| `0812-3456-7890` | `+6281234567890` |
| `+6281234567890` | `+6281234567890` |

### Username Generation

Username dibuat dari nomor HP dengan format:
- Format: `hp` + 8 digit terakhir nomor HP
- Contoh: `081234567890` → `hp34567890`

## 🧪 Testing

### Manual Testing

```bash
# Test registration flow
curl -X POST http://localhost:3000/peserta/registrasi/new \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-token" \
  -d '{
    "nik": "1234567890123456",
    "kewarganegaraan": "WNI",
    "nama_lengkap": "Test User",
    "tanggal_lahir": "01-01-1990",
    "jenis_kelamin": "L",
    "no_hp": "081234567890",
    "email": "test@example.com"
  }'
```

## 🚨 Troubleshooting

### Common Issues

1. **Foreign Key Constraint Error**
   ```
   Foreign key constraint violated on the fields: (`peserta_id`)
   ```
   **Solution:** Pastikan database schema sudah di-pull dan client sudah di-generate:
   ```bash
   npx prisma db pull
   npx prisma generate
   ```

2. **Encryption Keys Not Found**
   ```
   Failed to read public key
   ```
   **Solution:** Generate keys:
   ```bash
   npx ts-node scripts/generate-keys.ts
   ```

3. **Database Connection Error**
   ```
   Can't connect to MySQL server
   ```
   **Solution:** Periksa `DATABASE_URL` di file `.env`

### Logs

Log aplikasi disimpan di folder `logs/` dengan format:
- `YYYY-MM-DD-combined.log` - Semua log
- `YYYY-MM-DD-error.log` - Error log saja

## 📚 Documentation

- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [MySQL Documentation](https://dev.mysql.com/doc/)

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

Untuk bantuan teknis, hubungi tim development atau buat issue di repository ini.

---

**⚠️ Important Notes:**
- Pastikan selalu menjalankan `npx prisma db pull` dan `npx prisma generate` setelah ada perubahan schema database
- File encryption keys (`src/keys/*.pem`) tidak boleh di-commit ke repository
- Gunakan environment variables untuk konfigurasi sensitive data