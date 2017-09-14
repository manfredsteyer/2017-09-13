import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PassengerService } from './passenger-search/passenger.service';
import { AbstractPassengerService } from './passenger-search/abstract-passenger.service';
import { AnonymousPassengerService } from './passenger-search/anonymous-passenger.service';
import { BASE_URL } from './app.tokens';
import { PassengerStatusPipe } from './shared/passenger-status.pipe';
import { StatusColorPipe } from './shared/status-color.pipe';
import { StatusFilterPipe } from './shared/status-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    PassengerSearchComponent,
    PassengerStatusPipe,
    StatusColorPipe,
    StatusFilterPipe
  ],
  providers: [
    // { provide: PassengerService, useClass: PassengerService }
    //PassengerService
    { provide: AbstractPassengerService, useClass: PassengerService },
    { provide: BASE_URL, useValue: 'http://www.angular.at/api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
