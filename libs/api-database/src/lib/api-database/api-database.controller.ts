import { Controller, Get } from '@nestjs/common';
import { ApiDatabaseService } from './api-database.service';

@Controller('api-database')
export class ApiDatabaseController {
  constructor(private apiDatabaseService : ApiDatabaseService) {}

  @Get('raw-sql')
  async findAll(): Promise<any[]> {
    return this.apiDatabaseService.rawSQL('teste');
  }
}
