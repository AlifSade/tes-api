import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddsekolahDTO, UpdatesekolahDTO } from './sekolah.dto';

@Injectable()
export class SekolahService {
  private readonly logger = new Logger(SekolahService.name);

  constructor(private prisma: PrismaService) {}

  async list(body: any) {
    const sekolahlist = await this.prisma.sekolah.findMany({});

    return sekolahlist;
  }

  async add(body: AddsekolahDTO) {
    const sekolahlist = await this.prisma.sekolah.create({
      data: {
        nama: body.nama,
        email: body.email,
        no_telp: body.no_telp,
        alamat: body.alamat,
      },
    });

    return sekolahlist;
  }

  async update(body: UpdatesekolahDTO) {
    const sekolahlist = await this.prisma.sekolah.update({
      where: {
        id: body.id,
      },
      data: {
        nama: body.nama,
        email: body.email,
        no_telp: body.no_telp,
        alamat: body.alamat,
      },
    });

    return sekolahlist;
  }
}
