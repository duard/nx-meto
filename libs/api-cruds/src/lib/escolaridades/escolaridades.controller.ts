import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { CargoEntity, EscolaridadeEntity } from '@meto/api-interfaces';
import { EscolaridadesService } from './escolaridades.service';

@Crud({
  model: {
    type: CargoEntity,
  },
  query: {
    limit: 5,
    cache: 2000,
  },
  params: {
    id: {
      field: 'IDE002',
      type: 'number',
      primary: true,
    },
  },
})
@Controller('escolaridades')
export class EscolaridadesController implements CrudController<EscolaridadeEntity> {
  constructor(public service: EscolaridadesService) {}
}
