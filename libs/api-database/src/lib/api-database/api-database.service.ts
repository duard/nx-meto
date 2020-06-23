import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class ApiDatabaseService {

  constructor(private readonly entityManager: EntityManager) { }

  async rawSQL(sqlQuery: any) {
    const rawData = await this.entityManager.query(`SHOW FULL TABLES`);
    return rawData;
  }
}

// const rawData = await manager.query(`SELECT * FROM USERS`);
