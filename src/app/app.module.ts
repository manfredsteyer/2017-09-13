import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PassengerSearchComponent } from './flight-booking/passenger-search/passenger-search.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PassengerService } from './flight-booking/passenger-search/passenger.service';
import { AbstractPassengerService } from './flight-booking/passenger-search/abstract-passenger.service';
import { AnonymousPassengerService } from './flight-booking/passenger-search/anonymous-passenger.service';
import { BASE_URL } from './app.tokens';
import { PassengerStatusPipe } from './shared/passenger-status.pipe';
import { StatusColorPipe } from './shared/status-color.pipe';
import { StatusFilterPipe } from './shared/status-filter.pipe';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightBookingModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    { provide: BASE_URL, useValue: 'http://www.angular.at/api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
