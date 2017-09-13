import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PassengerService } from './passenger-search/passenger.service';

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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
