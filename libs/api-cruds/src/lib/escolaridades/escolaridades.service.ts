import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EscolaridadeEntity  } from '@meto/api-interfaces';

@Injectable()
export class EscolaridadesService extends TypeOrmCrudService<EscolaridadeEntity> {
  constructor(@InjectRepository(EscolaridadeEntity) thisRepository: Repository<EscolaridadeEntity>) {
    super(thisRepository);
  }
}
