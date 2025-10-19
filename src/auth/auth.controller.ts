import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
  UseGuards,
  Request,
  Response,
  HttpException,
  ForbiddenException,
  Res,
} from '@nestjs/common';
import { AuthService, SendOTPPublic } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import { ApiHeader } from '@nestjs/swagger';
import { CustomHeaders } from './decorators/public.decorator';
import { SignInGuard } from './guards/signin.guards';
import { AppHttpResponse } from 'src/interfaces/default-response';
import { RefreshJwtGuard } from './guards/refresh.guard';
import { StatusCode } from 'src/utilities/enums';
import {
  LoginUserDTO,
  RegisterUserDTO,
  VerifyLoginPasswordDTO,
  VerifyOTPDTO,
} from './auth.dto';
import { OKException } from 'src/utilities/ok.exception';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}

  private readonly logger = new Logger(AuthController.name, {
    timestamp: true,
  });

  @UseGuards(SignInGuard)
  @Post('public-access')
  @ApiHeader({
    name: 'client-id', // your header name
    required: true, // Set required to false to make it optional
  })
  async signin(
    @CustomHeaders() request: any,
    @Body() signInDto: { platform: string },
    @Response() res: any,
  ) {
    const signin = await this.authservice.siginin(request, signInDto);

    return res.send(signin);
  }

  // for generate new token from refresh token
  @UseGuards(RefreshJwtGuard)
  @Post('refresh-token')
  async refreshToken(@Request() request: ExpressRequest) {
    console.log('request.user REFRESH TOKEN : ', request.user);
    if (request.user) {
      return await this.authservice.generateToken(
        request.user,
        request.user.uuid ? 'new_token' : 'refresh_token',
      );
    } else {
      const errors = {
        status: StatusCode.failed,
        message: 'Please Try again',
      };
      throw new ForbiddenException(errors);
    }
  }

  // for generate private secret public key to get access token
  @Post('generate-digital-signature')
  async generateDigitalSignature(
    @Body() generateDto: { uuid: string },
    @Response() res: any,
  ) {
    // Generate RSA key pair
    const generateSignature =
      await this.authservice.generateDigitalSignature(generateDto);

    return res.send(generateSignature);
  }

  @UseGuards(AuthGuard)
  @Post('sample')
  async sample(@Request() request: ExpressRequest) {
    if (request.user) {
      return {
        data: {
          name: 'Test',
          description: 'This endpoint protect by token headers',
        },
      };
    } else {
      const errors = {
        status: StatusCode.failed,
        message: 'Please Try again',
      };
      throw new ForbiddenException(errors);
    }
  }

  @UseGuards(AuthGuard)
  @Post('user-auth')
  async userAuth(
    @Request() request: ExpressRequest,
    @Res() res: ExpressResponse,
  ) {
    if (request.user) {
      const result = await this.authservice.userAuth(request.user);
      throw new OKException(result, 'Success');
    } else {
      const errors = {
        status: StatusCode.failed,
        message: 'Please Try again',
      };
      throw new ForbiddenException(errors);
    }
  }

  @UseGuards(AuthGuard)
  @Post('logged-in')
  async loggedIn(
    @CustomHeaders() request: any,
    @Body() body: LoginUserDTO,
    @Response() res: any,
  ) {
    const signin = await this.authservice.loggedIn(body);

    throw new OKException(signin, 'Success');
  }
}
