import { CargosModule, EscolaridadesModule } from '@meto/api-cruds';
import { ApiDatabaseModule } from '@meto/api-database';
import { SharedThingsModule } from '@meto/shared-things';
import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config';


import { ConfigService } from "@meto/shared-things";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    HelmetMiddleware,
    ApiDatabaseModule,
    CargosModule,

    EscolaridadesModule,
    // GraphQLModule.forRoot({
    //   typePaths: ['./**/*.graphql'],
    //   definitions: { path: join(process.cwd(), 'src/graphql.ts') },
    //   context: ({ req }) => ({ headers: req.headers }),
    // }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useClass: DatabaseConfig,
    // }),

    TypeOrmModule.forRootAsync({
      imports: [SharedThingsModule],
      useFactory: (configService: ConfigService) => configService.typeOrmConfig,
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('=> ', __dirname);
  }
}
