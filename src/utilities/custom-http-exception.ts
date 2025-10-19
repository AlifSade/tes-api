import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { IGlobalResponse, IHttpException } from 'src/types';
import { StatusCode } from './enums';

@Catch(HttpException)
export class CustomHttpException implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let res = {} as IGlobalResponse;

    const statusCode = exception.getStatus();

    const exceptionResponse = exception.getResponse() as IHttpException;

    let errorStatus = StatusCode.failed; // default
    let message: string | [] = [];
    const isSuccess = statusCode >= 200 && statusCode < 300;

    if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
      const resp: any = exceptionResponse;
      message = resp.message || '';
    } else if (typeof exceptionResponse === 'string') {
      message = exceptionResponse;
    }

    errorStatus = statusCode == 200 ? StatusCode.success : StatusCode.failed;

    if (typeof exceptionResponse.status !== 'undefined') {
      if (
        exceptionResponse.status === StatusCode.failed ||
        exceptionResponse.status === false
      ) {
        errorStatus = StatusCode.failed;
      } else {
        errorStatus = StatusCode.success;
      }
    }

    if (exceptionResponse.type && exceptionResponse.type == 'validation') {
      res = {
        // success: isSuccess,
        status: errorStatus,
        msg:
          typeof message == 'object' &&
          (message as any[]).reduce(
            (acc: any, item) => {
              const [key, value] = Object.entries(item)[0];
              acc[key] = value;
              return acc;
            },
            {} as Record<string, string>,
          ),
      };
      response.status(statusCode).json(res);
      return; // prevent writing headers twice
    }

    res = {
      // success: isSuccess,
      status: errorStatus,
      msg:
        typeof exceptionResponse.message !== 'undefined'
          ? exceptionResponse.message
          : exceptionResponse,
    };

    if ((exceptionResponse as any).data) {
      res = { ...res, data: (exceptionResponse as any).data };
    }

    response.status(statusCode).json(res);
  }
}
