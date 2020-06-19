import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@meto/api-interfaces';
import { environment } from '@env/environment';

@Component({
  selector: 'meto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // isDev = !this.env.production;

  isDev = !environment.production;


  hello$ = this.http.get<Message>('/api/hello');

  constructor(private http: HttpClient) {
    console.log('this.env',  this.isDev);
  }

}
