import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  // baseUrl = environment.developmentUrl;
  env = environment;

  isDev = !environment.production;
  protected http: HttpClient;

  constructor(private injectorObj: Injector) {
    this.http = this.injectorObj.get(HttpClient);
  }
}
