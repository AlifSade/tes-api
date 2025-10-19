import { IsNotEmpty, IsString } from 'class-validator';

export class ActivateDto {
  @IsNotEmpty()
  @IsString()
  uuid: string;
}
