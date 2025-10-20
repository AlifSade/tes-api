import { IsNotEmpty, IsOptional } from 'class-validator';

export class AddmuridDTO {
  @IsNotEmpty()
  sekolah_id: any;

  @IsNotEmpty()
  nama: string;

  @IsNotEmpty()
  alamat: string;

  @IsNotEmpty()
  usia: any;

  @IsNotEmpty()
  no_telp: string;
}

export class UpdatemuridDTO {
  @IsNotEmpty()
  id: any;

  @IsNotEmpty()
  nama: string;

  @IsOptional()
  alamat: string;

  @IsOptional()
  usia: any;

  @IsOptional()
  no_telp: string;
}
