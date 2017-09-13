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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    PassengerSearchComponent
  ],
  providers: [
    // { provide: PassengerService, useClass: PassengerService }
    //PassengerService
    { provide: AbstractPassengerService, useClass: AnonymousPassengerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
