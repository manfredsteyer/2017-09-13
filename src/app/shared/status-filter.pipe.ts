import { Pipe, PipeTransform } from '@angular/core';
import { Passenger } from '../entities/passenger';

@Pipe({
  name: 'statusFilter',
  pure: true
})
export class StatusFilterPipe implements PipeTransform {

  transform(value: Passenger[], status: string): Passenger[] {
    return value.filter(p => p.passengerStatus === status);
  }

}
