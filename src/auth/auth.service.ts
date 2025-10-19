import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  generateDigitalSignature,
  generateOTP,
  getExpiryTime,
} from 'src/lib/utils';
import { PrismaService } from 'src/prisma/prisma.service';
import { IJWTPayload, ISignIn, IUserAuth } from 'src/types';
import { LoginUserDTO } from './auth.dto';
import { AppHttpResponse } from 'src/interfaces/default-response';
import axios from 'axios';
import * as bcrypt from 'bcrypt';

export interface SendOTPPublic {
  phone: string;
  //otp: string,
  expires: Date;
}

export interface UserPublic {
  uuid: string;
  username: string;
  verified: string;
}

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
}
