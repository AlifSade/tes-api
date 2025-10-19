import { IsNotEmpty, IsString } from 'class-validator';

export class InformasiDto {
  @IsNotEmpty()
  @IsString()
  uuid: string;
}
