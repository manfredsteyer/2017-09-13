import { Directive, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validator } from '@angular/forms';
import { PassengerService } from '../../flight-booking/passenger-search/passenger.service';
import { AbstractPassengerService } from '../../flight-booking/passenger-search/abstract-passenger.service';
import { Observable } from 'rxjs/Observable';

@Directive({
  selector: '[asyncPassengerName]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncPassengerNameValidationDirective,
      multi: true
    }
  ]
})
export class AsyncPassengerNameValidationDirective implements AsyncValidator {

  constructor(private passengerService: AbstractPassengerService) {
  }

  validate(c: AbstractControl): Observable<object> {

    return this
            .passengerService
            .find(c.value, '')
            .map(p => p.length === 0)
            .map(err => err ? {asyncPassengerName:true}: {});

  }



}
