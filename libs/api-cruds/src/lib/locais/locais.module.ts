import { LocalEntity } from '@meto/api-interfaces';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LocaisController } from './locais.controller';
import { LocaisService } from './locais.service';

@Module({
  imports: [TypeOrmModule.forFeature([LocalEntity])],
  controllers: [LocaisController],
  providers: [LocaisService],
})
export class LocaisModule {}
