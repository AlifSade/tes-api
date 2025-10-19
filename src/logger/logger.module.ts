import {
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { MongodbService } from './mongodb/mongodb.service';
import { RequestContextService } from './request-context.service';
import { RequestContextMiddleware } from './request-context.middleware';

@Module({
  providers: [MongodbService, RequestContextService],
  exports: [MongodbService, RequestContextService],
})
export class LoggerModule implements NestModule {
  constructor(private readonly contextService: RequestContextService) {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestContextMiddleware).forRoutes('*');
  }
}
