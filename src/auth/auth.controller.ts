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
}
