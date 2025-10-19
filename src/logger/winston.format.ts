import * as winston from 'winston';
import { RequestContextService } from './request-context.service';

export const customMongoFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format((info) => {
    let meta = info;
    const context = RequestContextService.getInstance();
    if (context) {
      const route = context.get('route') || null; // ✅ Add route
      const requestID = context.get('requestID') || null; // ✅ Add requestID
      meta = { ...meta, route, requestID };
    }
    return meta;
  })(),
  winston.format.json(),
);
