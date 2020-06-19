import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CargoEntity } from '@meto/api-interfaces';
import { CargosController } from './cargos.controller';
import { CargosService } from './cargos.service';

@Module({
  imports: [TypeOrmModule.forFeature([CargoEntity])],
  controllers: [CargosController],
  providers: [CargosService],
})
export class CargosModule {}
