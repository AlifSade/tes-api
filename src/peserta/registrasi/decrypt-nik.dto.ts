import { IsNotEmpty, IsString } from 'class-validator';

export class DecryptNikDto {
  @IsNotEmpty()
  @IsString()
  encrypted_nik: string;
}
