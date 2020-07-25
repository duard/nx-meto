import { Controller, Get, Query } from '@nestjs/common';

import { Message } from '@meto/api-interfaces';

import { AppService } from './app.service';
import { ApiDatabaseService } from '@meto/api-database';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private apiDB: ApiDatabaseService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('menu')
  async rawSql(@Query() query): Promise<any[]> {
    return this.apiDB.rawSQL(
      `SELECT * FROM G033 P, G032 M WHERE P.IDG032=M.IDG032 AND P.IDG031='1' AND M.DELETED='N' AND M.STS='A'   ORDER BY M.ORDEM  ASC`
    );
  }
}
