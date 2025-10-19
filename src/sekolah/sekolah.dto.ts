import { IsNotEmpty } from 'class-validator';

export class AddsekolahDTO {
  @IsNotEmpty()
  nama: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  alamat: string;

  @IsNotEmpty()
  no_telp: string;
}
