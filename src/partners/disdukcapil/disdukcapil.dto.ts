import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CekNIK {
  @IsNotEmpty()
  @IsString()
  @MaxLength(16)
  @MinLength(16)
  nik: string;

  @IsNotEmpty()
  @IsString()
  nama: string;

  @IsNotEmpty()
  @IsString()
  jenis_kelamin: 'Laki-Laki' | 'Perempuan';

  @IsNotEmpty()
  @IsString()
  tanggal_lahir: string;
}
