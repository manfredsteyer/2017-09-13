import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PassengerSearchComponent } from './passenger-search.component';
import { FlightBookingModule } from '../flight-booking.module';
import { HttpClientModule } from '@angular/common/http';
import { BASE_URL } from '../../app.tokens';

// Nicht im Produktivbetrieb machen!!
import 'rxjs';

import { Observable } from 'rxjs/Observable';
import { Passenger } from '../../entities/passenger';
import { PassengerService } from './passenger.service';
import { AbstractPassengerService } from './abstract-passenger.service';

let passengerServiceMock = {
  find(name: string, firstName: string): Observable<Passenger[]> {
    return Observable.of([
      {
        id: 4711,
        name: 'Sorglos',
        firstName: 'Susi',
        passengerStatus: 'A'
      }
    ])
  }
}

describe('PassengerSearchComponent', () => {
  let component: PassengerSearchComponent;
  let fixture: ComponentFixture<PassengerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FlightBookingModule
      ],
      declarations: [
      ],
      providers: [
        { provide: BASE_URL, useValue: 'http://test.angular.at/api'}
      ]
    })
    .compileComponents();

    TestBed.overrideComponent(PassengerSearchComponent, {
      set: {
        providers: [
          {
            provide: AbstractPassengerService,
            useValue: passengerServiceMock
          }
        ]
      }
    }).compileComponents();

  }));

  it('should have no flights initially', () => {
    let fixture = TestBed.createComponent(PassengerSearchComponent);
    let comp = fixture.componentInstance;
    expect(comp.passengers.length).toBe(0);
  });

  it('should not load passengers w/o name', () => {
    let fixture = TestBed.createComponent(PassengerSearchComponent);
    let comp = fixture.componentInstance;

    comp.name = '';

    comp.search();

    expect(comp.passengers.length).toBe(0);

  });

  it('should load passengers w/ name', () => {
    let fixture = TestBed.createComponent(PassengerSearchComponent);
    let comp = fixture.componentInstance;

    let ps = fixture.debugElement.injector.get(AbstractPassengerService);

    spyOn(ps, 'find').and.callThrough();

    comp.name = 'Sorglos';

    comp.search();

    expect(comp.passengers.length).toBe(1);
    expect(ps.find).toHaveBeenCalled();
  });

});
