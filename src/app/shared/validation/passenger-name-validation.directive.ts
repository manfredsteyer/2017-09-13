import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[passengerName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PassengerNameValidationDirective,
      multi: true
    }
  ]
})
export class PassengerNameValidationDirective implements Validator {

  @Input('passengerName') mode: string;

  validate(c: AbstractControl): object {

    let value = c.value;
    if (!value) return { };

    let ok: boolean;

    if (this.mode === 'strict') {
      ok = value.match('^[a-zA-Z\-]*$');
    }
    else {
      ok = value.match('^[a-zA-Z\- \.]*$');
    }

    if (ok) return {};

    return {
      passengerName: true
    };

  }

}
