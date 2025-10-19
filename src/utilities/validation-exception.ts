import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';
import { Response } from 'express';
import { ValidationError } from 'class-validator';

@Catch(BadRequestException)
export class ValidationException implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const exceptionResponse = exception.getResponse();

    let validationErrors: ValidationError[] = [];

    // Only override if it's ValidationError[]
    if (
      Array.isArray(exceptionResponse as any) ||
      Array.isArray((exceptionResponse as any).message)
    ) {
      validationErrors = Array.isArray(exceptionResponse)
        ? exceptionResponse
        : (exceptionResponse as any).message;
    }

    const formattedErrors: Record<string, string> = {};

    validationErrors.forEach((error) => {
      if (error.property && error.constraints) {
        formattedErrors[error.property] = Object.values(error.constraints)[0];
      }
    });

    response.status(400).json({
      status: false,
      data: formattedErrors,
      message: '',
    });
  }
}
