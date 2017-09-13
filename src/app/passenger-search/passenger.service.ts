import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Passenger } from '../entities/passenger';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class PassengerService {

  constructor(private http: HttpClient) {
    console.debug('Liebesgrüße aus dem Ctor!');
  }

  find(name: string, firstName: string): Observable<Passenger[]> {
    let url = 'http://www.angular.at/api/passenger';

    let params = new HttpParams()
      .set('name', name)
      .set('firstName', firstName);

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Passenger[]>(url, { params, headers });
  }
}
