import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { LocalEntity } from '@meto/api-interfaces';
import { LocaisService } from './locais.service';

@Crud({
  model: {
    type: LocalEntity,
  },
  query: {
    limit: 5,
    cache: 2000,
  },
  params: {
    id: {
      field: 'IDG004',
      type: 'number',
      primary: true,
    },
  },
})
@Controller('locais')
export class LocaisController implements CrudController<LocalEntity> {
  constructor(public service: LocaisService) {}
}
