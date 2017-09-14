import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor',
  pure: true
})
export class StatusColorPipe implements PipeTransform {

  transform(value: string): string {

    let color: string;

    switch(value) {
      case 'A':
        color = 'orange';
        break;
      case 'B':
        color = 'purple';
        break;
      default:
        color = 'blue';
    }

    return color;
  }

}
