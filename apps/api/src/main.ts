/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const configService = app.get(ConfigService);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = configService.get('API_METO_PORT');



  await app.listen(port, () => {
    Logger.debug('API_METO_PORT =>', process.env.API_METO_PORT);
    Logger.debug('HOSTNAME =>', process.env.DB_METO_HOSTNAME);
    Logger.debug('USERNAME =>', process.env.DB_METO_USERNAME);
    Logger.debug('PASSWORD =>', process.env.DB_METO_PASSWORD);
    Logger.debug('DATABASE =>', process.env.DB_METO_DATABASE);
    Logger.debug('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
