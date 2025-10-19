import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Matches,
  MinLength,
  ValidateIf,
} from 'class-validator';
import { OnboardingStepTypeEnum } from 'src/utilities/enums';

export class RegisterUserDTO {
  //@IsPhoneNumber('ID')
  @Transform(({ value }) => value.replace(/\D/g, ''))
  @Matches(/^(?:\+62|62|0)?8[0-9]{8,11}$/, {
    message: 'Phone number must be a valid Indonesian mobile number',
  })
  @IsNotEmpty()
  phone: string;
}

export class LoginUserDTO {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

export class VerifyOTPDTO {
  //@IsPhoneNumber('ID')
  @Transform(({ value }) => value.replace(/\D/g, ''))
  @Matches(/^(?:\+62|62|0)?8[0-9]{8,11}$/, {
    message: 'Phone number must be a valid Indonesian mobile number',
  })
  @IsNotEmpty()
  phone: string;

  @IsNumber()
  @IsNotEmpty()
  otp_code: number;
}

export class VerifyLoginPasswordDTO {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
