import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EscolaridadeEntity } from '@meto/api-interfaces';
import { EscolaridadesController } from './escolaridades.controller';
import { EscolaridadesService } from './escolaridades.service';

@Module({
  imports: [TypeOrmModule.forFeature([EscolaridadeEntity])],
  controllers: [EscolaridadesController],
  providers: [EscolaridadesService],
})
export class EscolaridadesModule {}
