import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CargoEntity } from '@meto/api-interfaces';


@Injectable()
export class CargosService extends TypeOrmCrudService<CargoEntity> {
  constructor(@InjectRepository(CargoEntity) thisRepository: Repository<CargoEntity>) {
    super(thisRepository);
  }
}
