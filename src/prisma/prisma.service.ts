import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../prisma/generated/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: [
        { level: 'query', emit: 'event' },
        { level: 'error', emit: 'event' },
        { level: 'warn', emit: 'event' },
      ],
    });
  }

  async onModuleInit() {
    this.$on('query' as never, (e: any) => {
      // console.log('🧩 Query:', e.query);
      // console.log('📦 Params:', e.params);
      // console.log('⏱ Duration:', e.duration, 'ms');
    });

    this.$on('warn' as never, (e: any) => {
      // console.warn('⚠️ Prisma Warning:', e.message);
    });

    this.$on('error' as never, (e: any) => {
      console.error('🔥 Prisma Error:', e.message);
    });

    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}

// https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0
