import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SekolahService {
  private readonly logger = new Logger(SekolahService.name);

  constructor(private prisma: PrismaService) {}

  async list(body: any) {
    const sekolahlist = await this.prisma.sekolah.findMany({});

    return sekolahlist;
  }
}
