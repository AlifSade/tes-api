import { HttpException, HttpStatus } from '@nestjs/common';

export class OKException extends HttpException {
  constructor(data: any, message = '') {
    super(
      {
        status: true,
        data,
        message,
      },
      HttpStatus.OK,
    );
  }
}
