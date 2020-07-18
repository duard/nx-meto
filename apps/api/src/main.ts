/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { BunyanLoggerService } from '@lupu60/nestjs-toolbox';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { ValidationPipe } from '@meto/shared-things';

import { AppModule } from './app/app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule, {
  //   logger: new BunyanLoggerService({
  //     projectName: 'SIMPLES',
  //     formatterOptions: {
  //       outputMode: 'short',
  //       color: true,
  //       levelInString: true,
  //       // colorFromLevel: any
  //     },
  //     customStreams: [
  //       {
  //         path: './api-log.log',
  //       },
  //     ],
  //   }),
  // });
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // const app = await NestFactory.create(AppModule, { logger: true });
  // app.useLogger(app.get(Logger));

  app.enableCors();
  const configService = app.get(ConfigService);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const options = new DocumentBuilder()
    .setTitle('Simples API Carlos')
    .setDescription('API NestJS para Base')
    .setVersion('1.0')
    // .setBasePath('api')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);
  const PORT = process.env.PORT || 3000;

  await app.listen(PORT, () => {
    Logger.debug('AMBIENTE =>', process.env.NODE_ENV);
    Logger.debug('PORT =>', process.env.PORT);
    Logger.debug('API_METO_PORT =>', process.env.API_METO_PORT);
    Logger.debug('HOSTNAME =>', process.env.DB_METO_HOSTNAME);
    Logger.debug('USERNAME =>', process.env.DB_METO_USERNAME);
    Logger.debug('PASSWORD =>', process.env.DB_METO_PASSWORD);
    Logger.debug(': DATABASE', process.env.DB_METO_DATABASE);
    Logger.debug('Listening at http://localhost:' + process.env.PORT || 3000 + '/' + globalPrefix);
    console.log(`Listening on ${PORT}`);
  });


}

bootstrap();
