import { Module } from '@nestjs/common';
import { ProvinsiController } from './provinsi/provinsi.controller';
import { ProvinsiService } from './provinsi/provinsi.service';

@Module({
  controllers: [ProvinsiController],
  providers: [ProvinsiService]
})
export class LocationModule {}
