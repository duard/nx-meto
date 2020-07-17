import { Injectable } from '@nestjs/common';
import { Message } from '@meto/api-interfaces';

@Injectable()
export class AppService {
  getData(): any {
    return { message: 'Welcome to api!', hora: new Date() };
  }
}
