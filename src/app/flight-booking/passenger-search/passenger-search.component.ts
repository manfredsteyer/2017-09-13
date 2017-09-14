import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../entities/passenger';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PassengerService } from './passenger.service';
import { AbstractPassengerService } from './abstract-passenger.service';

@Component({
  selector: 'passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css'],
  // providers: [PassengerService]
})
export class PassengerSearchComponent implements OnInit {

  name: string = '';
  firstName: string = '';
  selectedPassenger: Passenger;
  passengers: Array<Passenger> = [];

  selection: object = {
    1: true,
    2: true
  }

  message: string;
  // private http: HttpClient;

  constructor(
    private passengerService: AbstractPassengerService,
    private http: HttpClient) {
    console.debug('Liebesgrüße aus dem Ctor!');
  }

  ngOnInit() {
    console.debug('Komponente lebt!');
  }

  search(): void {
    this
      .passengerService
      .find(this.name, this.firstName)
      .subscribe(
        passengers => { this.passengers = passengers; },
        err => { console.error('Error loading', err); }
      );

  }

  select(p: Passenger) {
    this.selectedPassenger = p;
  }

  // Bonus-Übung
  save() {
    let url = 'http://www.angular.at/api/passenger';

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http
      .post<Passenger>(url, this.selectedPassenger, { headers })
      .subscribe(
        p => {
          this.selectedPassenger = p;
          this.message = 'Successfully saved!';
        },
        err => {
          console.error('Error saving', err);
          this.message = 'Error saving passenger!';
        }
      );
  }
}
