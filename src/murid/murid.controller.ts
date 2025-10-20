import { Body, Controller, Logger, Post, Response } from '@nestjs/common';
import { MuridService } from './murid.service';
import { OKException } from 'src/utilities/ok.exception';
import { AddmuridDTO, UpdatemuridDTO } from './murid.dto';

@Controller('murid')
export class MuridController {
  constructor(private muridservice: MuridService) {}

  private readonly logger = new Logger(MuridController.name, {
    timestamp: true,
  });

  @Post('list')
  async loggedIn(@Body() body: any, @Response() res: any) {
    const signin = await this.muridservice.list(body);

    throw new OKException(signin, 'Success');
  }

  @Post('add')
  async add(@Body() body: AddmuridDTO, @Response() res: any) {
    const signin = await this.muridservice.add(body);

    throw new OKException(signin, 'Success');
  }

  @Post('update')
  async update(@Body() body: UpdatemuridDTO, @Response() res: any) {
    const signin = await this.muridservice.update(body);

    throw new OKException(signin, 'Success');
  }
}
