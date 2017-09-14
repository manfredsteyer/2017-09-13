import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerStatusPipe } from './passenger-status.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PassengerStatusPipe,
    StatusColorPipe,
    StatusFilterPipe
  ],
  exports: [
    PassengerStatusPipe,
    StatusColorPipe,
    StatusFilterPipe
  ]
})
export class SharedModule { }
