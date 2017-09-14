import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Passenger } from '../../entities/passenger';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AbstractPassengerService } from './abstract-passenger.service';
import { BASE_URL } from '../../app.tokens';

@Injectable()
export class PassengerService implements AbstractPassengerService {

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: HttpClient) {
    console.debug('Liebesgrüße aus dem Ctor!');
  }

  find(name: string, firstName: string): Observable<Passenger[]> {
    let url = this.baseUrl + '/passenger';

    let params = new HttpParams()
      .set('name', name)
      .set('firstName', firstName);

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Passenger[]>(url, { params, headers });
  }
}
