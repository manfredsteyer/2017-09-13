import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passengerStatus',
  pure: true
})
export class PassengerStatusPipe implements PipeTransform {

  transform(value: string, fmt: string): string {

    let short, long;

    switch(value) {
      case 'A':
        short = 'SEN';
        long = 'Senator';
        break;
      case 'B':
        short = 'FTL';
        long = 'Frequent Traveller'
        break;
      default:
        short = 'P';
        long = 'Passenger'

    }

    if (fmt == 'short') return short;
    return long;
  }

}
