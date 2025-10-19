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

const EXPIRE_TIME = 3600 * 24; // 1d

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

  async userAuth(params: IJWTPayload) {
    let response = null as null | IUserAuth;

    try {
      const findUser = await this.prisma.user.findFirst({
        select: {
          uuid: true,
          complete_onboarding: true,
          peserta: {
            select: {
              nama_lengkap: true,
            },
          },
        },
        where: {
          uuid: params.uuid,
        },
      });

      if (findUser) {
        response = {
          uuid: findUser.uuid,
          complete_onboarding: findUser.complete_onboarding,
          nama: findUser.peserta?.nama_lengkap ?? '',
          type: 'peserta',
        };
      } else {
        const errors = {
          message: 'User not founds',
        };
        throw new HttpException(errors, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      const errors = {
        message: `Something wrong, please try again`,
      };
      throw new HttpException(errors, HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  async siginin(request: any, signInDto: { platform: string }) {
    let success = false;
    let message = 'failed';
    let error = [] as any;
    let data = {} as ISignIn;

    const uuid = request['client-id'];
    const isDevelopment = process.env.NODE_ENV === 'DEVELOPMENT' ? true : false;

    const payload = <IJWTPayload>{
      platform: signInDto.platform,
      uuid: uuid,
    };

    success = true;
    message = 'success';
    data = {
      tokens: {
        accessToken: await this.jwtService.signAsync(payload, {
          expiresIn: isDevelopment ? '30s' : EXPIRE_TIME * 1000 + 's',
          secret: process.env.JWT_SECRET_KEY,
        }),
        refreshToken: await this.jwtService.signAsync(payload, {
          expiresIn: '7d',
          secret: process.env.JWT_REFRSH_TOKEN_KEY,
        }),
        expiresIn: new Date().setTime(
          new Date().getTime() +
            (isDevelopment ? 30 * 1000 : EXPIRE_TIME * 1000),
        ),
      },
    };

    return {
      success,
      message,
      error,
      data,
    };
  }

  async generateToken(
    payload: IJWTPayload,
    type?: 'new_token' | 'refresh_token',
  ) {
    let success = false;
    let message = 'failed';
    let error = [] as any;
    let data = {} as any;

    const isDevelopment = process.env.NODE_ENV === 'DEVELOPMENT' ? true : false;

    let is_new_token = true as boolean;

    if (type && type == 'refresh_token') {
      is_new_token = false;
    }

    const { iat, exp, ...newPayload } = payload;

    if (is_new_token) {
      // return onboarding info for new token request
      const user = await this.prisma.user.findFirst({
        select: {
          complete_onboarding: true,
        },
        where: {
          uuid: newPayload.uuid,
        },
      });

      if (!user) {
        const errors = {
          message: 'User not found',
        };
        throw new HttpException(errors, HttpStatus.BAD_REQUEST);
      }

      data = {
        ...data,
        onboarding: {
          complete: user.complete_onboarding,
        },
      };
    }

    success = true;
    message = 'success';
    data = {
      ...data,
      tokens: {
        accessToken: await this.jwtService.signAsync(newPayload, {
          expiresIn: isDevelopment ? '30s' : EXPIRE_TIME + 's', // EXPIRE_TIME + 's',
          secret: process.env.JWT_SECRET_KEY,
        }),
        refreshToken: await this.jwtService.signAsync(newPayload, {
          expiresIn: '7d',
          secret: process.env.JWT_REFRSH_TOKEN_KEY,
        }),
        expiresIn: new Date().setTime(
          new Date().getTime() +
            (isDevelopment ? 30 * 1000 : EXPIRE_TIME * 1000),
        ),
      },
    };

    return {
      success,
      message,
      error,
      data,
    };
  }

  async generateDigitalSignature(generateDto: { uuid: string }) {
    let success = false;
    let message = 'failed';
    let error = [] as any;
    let data = {} as {
      secret: string;
      private_key: string;
      public_key: string;
    };

    const { secret, private_key, public_key } = generateDigitalSignature(
      generateDto.uuid,
    );

    const privateKey = private_key
      .replace(/-----BEGIN PRIVATE KEY-----/g, '')
      .replace(/-----END PRIVATE KEY-----/g, '')
      .replace(/\s+/g, ''); // Remove any whitespace/newlines

    const publicKey = public_key
      .replace(/-----BEGIN PUBLIC KEY-----/g, '')
      .replace(/-----END PUBLIC KEY-----/g, '')
      .replace(/\s+/g, ''); // Remove any whitespace/newlines

    await this.prisma.user_token.update({
      data: {
        secret,
        private_key: privateKey,
        public_key: publicKey,
        updated_at: new Date(),
      },
      where: {
        id: 1,
      },
    });

    success = true;
    message = 'success';
    data = {
      secret,
      private_key,
      public_key,
    };

    return {
      data,
      success,
      error,
      message,
    };
  }

  async loggedIn(body: LoginUserDTO) {
    // let success = false;
    // let message = 'failed';
    let error = [] as any;
    let data = {} as any;

    try {
      // Find user by username with necessary fields
      const user = await this.prisma.user.findFirst({
        where: {
          username: body.username,
          status: 1, // Only active users
        },
        select: {
          uuid: true,
          username: true,
          token: true,
          verified: true,
          status: true,
          complete_onboarding: true,
          peserta_id: true,
        },
      });

      if (!user) {
        const errors = {
          message: 'Username atau password salah',
        };
        throw new HttpException(errors, HttpStatus.UNAUTHORIZED);
      }

      // Check if user is verified
      if (user.verified !== 1) {
        const errors = {
          message:
            'Akun belum diverifikasi. Silakan verifikasi akun Anda terlebih dahulu',
        };
        throw new HttpException(errors, HttpStatus.FORBIDDEN);
      }

      // Verify password using bcrypt
      if (!user.token) {
        const errors = {
          message: 'Username atau password salah',
        };
        throw new HttpException(errors, HttpStatus.UNAUTHORIZED);
      }

      const isPasswordValid = await bcrypt.compare(body.password, user.token);

      if (!isPasswordValid) {
        const errors = {
          message: 'Username atau password salah',
        };
        throw new HttpException(errors, HttpStatus.UNAUTHORIZED);
      }

      // Create JWT payload
      const payload: IJWTPayload = {
        uuid: user.uuid,
        platform: 'web',
      };

      // Generate tokens using the existing generateToken function format
      const tokenData = await this.generateToken(payload);

      // success = true;
      // message = 'Login berhasil';
      data = tokenData.data;

      this.logger.log(`User ${user.username} logged in successfully`);
    } catch (error) {
      this.logger.error('Login failed:', error);

      if (error instanceof HttpException) {
        throw error;
      }

      const errors = {
        message: 'Terjadi kesalahan pada server',
      };
      throw new HttpException(errors, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return data;
  }
}
