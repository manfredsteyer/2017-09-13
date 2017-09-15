import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { PassengerService } from './passenger-search/passenger.service';
import { AbstractPassengerService } from './passenger-search/abstract-passenger.service';
import { PassengerCardComponent } from './passenger-card/passenger-card.component';
import { PassengerStatusToggleComponent } from './passenger-status-toggle/passenger-status-toggle.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { PassengerEditComponent } from './passenger-edit/passenger-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
  ],
  declarations: [
    PassengerSearchComponent,
    PassengerCardComponent,
    PassengerStatusToggleComponent,
    FlightSearchComponent,
    PassengerEditComponent
  ],
  providers: [
    { provide: AbstractPassengerService, useClass: PassengerService },
  ],
  exports: [
    PassengerSearchComponent
  ]
})
export class FlightBookingModule { }
