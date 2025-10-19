import { Injectable, OnModuleDestroy } from '@nestjs/common';
import * as winston from 'winston';
import 'winston-mongodb';
import { customMongoFormat } from '../winston.format';

@Injectable()
export class MongodbService implements OnModuleDestroy {
  private frontend: winston.Logger;

  constructor() {
    this.frontend = winston.createLogger({
      level: 'silly',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.MongoDB({
          db:
            process.env.MONGO_URI ||
            'mongodb://logger_user:logger_pass8910!@127.0.0.1:27017/waste_b',
          options: {},
          collection: 'frontend_logs',
          tryReconnect: true,
          format: customMongoFormat,
        }),
      ],
    });
  }

  // Deposit logs
  logFrontend(
    level: 'debug' | 'info' | 'warn' | 'error',
    message: string,
    meta: Record<string, any> = {},
  ) {
    this.frontend.log({ level, message, meta });
  }

  onModuleDestroy() {
    this.frontend.end(); // Gracefully close the logger
  }
}
