import {
  IsNotEmpty,
  IsString,
  MaxLength,
  Matches,
  IsEmail,
  IsIn,
  IsOptional,
  MinLength,
} from 'class-validator';

export class RegistrasiDto {
  @IsNotEmpty()
  @IsString()
  // Indonesian NIK is 16 digits
  @Matches(/^\d{16}$/, { message: 'nik must be exactly 16 digits' })
  nik: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['WNI', 'WNA'])
  kewarganegaraan: 'WNI' | 'WNA';

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  nama_lengkap: string;

  @IsNotEmpty()
  @IsString()
  // Expecting dd-mm-yyyy (e.g., 28-05-1987)
  @Matches(/^\d{2}-\d{2}-\d{4}$/, {
    message: 'tanggal_lahir must be in format DD-MM-YYYY',
  })
  tanggal_lahir: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['L', 'P'])
  jenis_kelamin: 'L' | 'P';

  @IsNotEmpty()
  @IsString()
  // simple phone validation: digits, optional leading +, 7-15 chars
  @Matches(/^\+?\d{7,15}$/, { message: 'no_hp must be a valid phone number' })
  no_hp: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @MaxLength(50, { message: 'Password must be less than 50 characters' })
  password?: string;
}
