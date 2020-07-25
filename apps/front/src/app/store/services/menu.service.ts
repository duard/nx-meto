import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators';
import { share, shareReplay } from 'rxjs/operators';

import { BaseService } from '../../core/base.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService extends BaseService {
  urlAPI: string;

  constructor(private injector: Injector) {
    super(injector);
  }

  getAll() {
    console.log('teste');
  }

  index(payload: any): Observable<any> {
    this.urlAPI = `${this.env.apiBase}/${'menu'}`;

    return this.http
      .get<any>(this.urlAPI, { params: payload })
      .pipe(
        map(result => result),
        shareReplay(),
        share()
      );
  }
}
