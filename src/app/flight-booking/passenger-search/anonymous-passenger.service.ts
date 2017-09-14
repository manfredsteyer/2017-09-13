import { Injectable } from '@angular/core';
import { AbstractPassengerService } from './abstract-passenger.service';
import { Observable } from 'rxjs/Observable';
import { Passenger } from '../../entities/passenger';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class AnonymousPassengerService implements AbstractPassengerService {

  constructor(private http: HttpClient) {
    console.debug('Liebesgrüße aus dem Ctor!');
  }

  private anonymize(passengers: Passenger[]): Passenger[] {
    return passengers.map(p =>{
      return {
        id: p.id,
        firstName: '***',
        name: '***',
        passengerStatus: p.passengerStatus
      }
    });
  }

  find(name: string, firstName: string): Observable<Passenger[]> {
    let url = 'http://www.angular.at/api/passenger';

    let params = new HttpParams()
      .set('name', name)
      .set('firstName', firstName);

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this
            .http
            .get<Passenger[]>(url, { params, headers })
            .map(passengers => this.anonymize(passengers));
  }


}
