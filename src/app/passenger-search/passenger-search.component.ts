import { Component, OnInit } from '@angular/core';
import { Passenger } from '../entities/passenger';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css']
})
export class PassengerSearchComponent implements OnInit {

  name: string;
  firstName: string;
  selectedPassenger: Passenger;
  passengers: Array<Passenger> = [];

  message: string;
  // private http: HttpClient;

  constructor(
    private http: HttpClient) {
    // this.http = http;
  }

  ngOnInit() {
    console.debug('Komponente lebt!');
  }

  search(): void {
    let url = 'http://www.angular.at/api/passenger';

    let params = new HttpParams()
      .set('name', this.name)
      .set('firstName', this.firstName);

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http
      .get<Passenger[]>(url, { params, headers })
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
