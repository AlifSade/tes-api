import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddmuridDTO, UpdatemuridDTO } from './murid.dto';

@Injectable()
export class MuridService {
  private readonly logger = new Logger(MuridService.name);

  constructor(private prisma: PrismaService) {}

  async list(body: any) {
    const muridlist = await this.prisma.murid.findMany({});

    return muridlist;
  }

  async add(body: AddmuridDTO) {
    const muridlist = await this.prisma.murid.create({
      data: {
        sekolah_id: body.sekolah_id,
        nama: body.nama,
        alamat: body.alamat,
        usia: body.usia,
        no_telp: body.no_telp,
      },
    });

    return muridlist;
  }

  async update(body: UpdatemuridDTO) {
    const muridlist = await this.prisma.murid.update({
      where: {
        id: body.id,
      },
      data: {
        nama: body.nama,
        alamat: body.alamat,
        usia: body.usia,
        no_telp: body.no_telp,
      },
    });

    return muridlist;
  }
}
