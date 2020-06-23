import { Module } from '@nestjs/common';
import { config } from './config';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { LoggerModule } from 'nestjs-pino';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from './database.config';

import { CargosModule, EscolaridadesModule } from '@meto/api-cruds';
import { ApiDatabaseModule } from '@meto/api-database';
import { HelmetMiddleware } from '@nest-middlewares/helmet'; // (look around in the source code for the exact class name)

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    HelmetMiddleware,

    // GraphQLModule.forRoot({
    //   typePaths: ['./**/*.graphql'],
    //   definitions: { path: join(process.cwd(), 'src/graphql.ts') },
    //   context: ({ req }) => ({ headers: req.headers }),
    // }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    ApiDatabaseModule,
    CargosModule,

    EscolaridadesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('=> ', __dirname);
  }
}
