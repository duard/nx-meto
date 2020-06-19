/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';


async function bootstrap() {
  console.log('HOSTNAME =>', process.env.DB_METO_HOSTNAME);
  console.log('USERNAME =>', process.env.DB_METO_USERNAME);
  console.log('PASSWORD =>', process.env.DB_METO_PASSWORD);
  console.log('DATABASE =>', process.env.DB_METO_DATABASE);
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const configService = app.get(ConfigService);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;



  await app.listen(configService.get('PORT'), () => {
    Logger.debug('teste');
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
