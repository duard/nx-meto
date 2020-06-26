import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LocalEntity } from '@meto/api-interfaces';

@Injectable()
export class LocaisService extends TypeOrmCrudService<LocalEntity> {
  constructor(@InjectRepository(LocalEntity) thisRepository: Repository<LocalEntity>) {
    super(thisRepository);
  }
}
