import { Module } from '@nestjs/common';
import { config } from './config';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from './database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: { path: join(process.cwd(), 'src/graphql.ts') },
      context: ({ req }) => ({ headers: req.headers }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
