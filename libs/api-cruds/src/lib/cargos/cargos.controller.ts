
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { CargoEntity } from '@meto/api-interfaces';
import { CargosService } from './cargos.service';

@Crud({
  model: {
    type: CargoEntity
  }
})
@Controller('cargos')
export class CargosController implements CrudController<CargoEntity>{
  constructor(public service: CargosService){}
}
