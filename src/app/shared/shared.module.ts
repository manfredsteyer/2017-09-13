import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerStatusPipe } from './passenger-status.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { PassengerNameValidationDirective } from './validation/passenger-name-validation.directive';
import { AsyncPassengerNameValidationDirective } from './validation/async-passenger-name-validation.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PassengerStatusPipe,
    StatusColorPipe,
    StatusFilterPipe,
    PassengerNameValidationDirective,
    AsyncPassengerNameValidationDirective
  ],
  exports: [
    PassengerStatusPipe,
    StatusColorPipe,
    StatusFilterPipe,
    PassengerNameValidationDirective,
    AsyncPassengerNameValidationDirective
  ]
})
export class SharedModule { }
