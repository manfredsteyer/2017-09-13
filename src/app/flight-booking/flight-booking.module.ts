import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { PassengerService } from './passenger-search/passenger.service';
import { AbstractPassengerService } from './passenger-search/abstract-passenger.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PassengerSearchComponent
  ],
  providers: [
    { provide: AbstractPassengerService, useClass: PassengerService },
  ],
  exports: [
    PassengerSearchComponent
  ]
})
export class FlightBookingModule { }
