import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import winston, { format, transports } from 'winston';
import { WinstonModule } from 'nest-winston';
import 'winston-daily-rotate-file';
import { ValidationError } from 'class-validator';
import { CustomHttpException } from './utilities/custom-http-exception';

async function bootstrap() {
  //BigInt Data type Json parse solution
  // Custom replacer to handle BigInt serialization
  const replacer = (key: any, value: { toString: () => any }) => {
    if (typeof value === 'bigint') {
      return value.toString(); // Convert BigInt to string
    }
    return value;
  };

  // Override JSON.stringify globally
  const originalStringify = JSON.stringify;
  JSON.stringify = (obj) => originalStringify(obj, replacer);
  //END OF BigInt Data type Json parse solution

  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        // file on daily rotation (error only)
        new transports.DailyRotateFile({
          // %DATE will be replaced by the current date
          filename: `logs/%DATE%-error.log`,
          level: 'error',
          format: format.combine(format.timestamp(), format.json()),
          datePattern: 'YYYY-MM-DD',
          zippedArchive: false, // don't want to zip our logs
          maxFiles: '365d', // will keep log until they are older than 1 years
        }),
        // same for all levels
        new transports.DailyRotateFile({
          filename: `logs/%DATE%-combined.log`,
          format: format.combine(format.timestamp(), format.json()),
          datePattern: 'YYYY-MM-DD',
          zippedArchive: false,
          maxFiles: '30d',
        }),
        // we also want to see logs in our console
        new transports.Console({
          format: format.combine(
            format.cli(),
            format.splat(),
            format.timestamp(),
            format.printf((info) => {
              return `${info.timestamp} ${info.level}: ${info.message}`;
            }),
          ),
        }),
      ],
    }),
  });

  // cors setting
  app.enableCors({
    methods: ['POST', 'GET'],
    origin: [
      // whitelist incoming request
      'http://localhost:2727',
      'http://sikompeten.kemendikdasmen.go.id',
      'https://sikompeten.kemendikdasmen.go.id',
    ],
    exposedHeaders: ['Content-Disposition'],
  });

  //Global validation DTO
  // app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const customErrors = errors.map((error) => ({
          [error.property]: Object.values(error.constraints || {})[0],
        }));
        return new BadRequestException({
          type: 'validation',
          message: customErrors,
        });
      },
    }),
  );
  app.useGlobalFilters(new CustomHttpException());

  const config = new DocumentBuilder()
    .setTitle('Sikompoten API')
    .setDescription('For sikompoten api documentation')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
