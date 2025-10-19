import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';
import { PartnersModule } from './partners/partners.module';
import { ConfigModule } from '@nestjs/config';
import { LocationModule } from './location/location.module';
import { LevelPendidikanController } from './informasi/level-pendidikan/level-pendidikan.controller';
import { LevelPendidikanService } from './informasi/level-pendidikan/level-pendidikan.service';
import { InformasiModule } from './informasi/informasi.module';
import { SekolahController } from './sekolah/sekolah.controller';
import { SekolahService } from './sekolah/sekolah.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // biar ga perlu import ulang di setiap module
    }),
    AuthModule,
    PrismaModule,
    ScheduleModule,
    ScheduleModule.forRoot(),
    PartnersModule,
    LocationModule,
    InformasiModule,
  ],
  controllers: [AppController, LevelPendidikanController, SekolahController],
  providers: [AppService, LevelPendidikanService, SekolahService],
  exports: [],
})
export class AppModule {}
