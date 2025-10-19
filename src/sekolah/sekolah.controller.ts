import { Body, Controller, Logger, Post, Response } from '@nestjs/common';
import { SekolahService } from './sekolah.service';
import { OKException } from 'src/utilities/ok.exception';

@Controller('sekolah')
export class SekolahController {
  constructor(private sekolahservice: SekolahService) {}

  private readonly logger = new Logger(SekolahController.name, {
    timestamp: true,
  });

  @Post('list')
  async loggedIn(@Body() body: any, @Response() res: any) {
    const signin = await this.sekolahservice.list(body);

    throw new OKException(signin, 'Success');
  }
}
