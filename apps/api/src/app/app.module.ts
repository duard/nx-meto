import { CargosModule, EscolaridadesModule, LocaisModule } from '@meto/api-cruds';
import { ApiDatabaseModule } from '@meto/api-database';
import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config';
import { DatabaseConfig } from './database.config';

@Module({
  imports: [
       // BEGIN INSERT
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'nx-app'),
      exclude: ['/api*']
    }),
    // END INSERT
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    HelmetMiddleware,
    ApiDatabaseModule,
    CargosModule,
    LocaisModule,
    EscolaridadesModule,
    // GraphQLModule.forRoot({
    //   typePaths: ['./**/*.graphql'],
    //   definitions: { path: join(process.cwd(), 'src/graphql.ts') },
    //   context: ({ req }) => ({ headers: req.headers }),
    // }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),

    // TypeOrmModule.forRootAsync({
    //   imports: [SharedThingsModule],
    //   useFactory: (configService: ConfigService) => configService.typeOrmConfig,
    //   inject: [ConfigService],
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('\n\n\n\n','=> ', process.env.NODE_ENV);

    console.log('=> ', __dirname);
    Logger.debug('ENVIRONMENT =>', process.env.NODE_ENV);
    Logger.debug('PORT =>', process.env.PORT);
    Logger.debug('API_METO_PORT =>', process.env.API_METO_PORT);
    Logger.debug('HOSTNAME =>', process.env.DB_METO_HOSTNAME);
    Logger.debug('USERNAME =>', process.env.DB_METO_USERNAME);
    Logger.debug('PASSWORD =>', process.env.DB_METO_PASSWORD);
    Logger.debug(': DATABASE', process.env.DB_METO_DATABASE);
  }
}
