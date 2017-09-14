import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'passenger-status-toggle',
  templateUrl: './passenger-status-toggle.component.html',
  styleUrls: ['./passenger-status-toggle.component.css']
})
export class PassengerStatusToggleComponent implements OnInit {

  constructor() { }

  @Input() status: string;
  @Output() statusChange = new EventEmitter<string>();

  ngOnInit() {
  }

  changeStatus(): void {
    switch(this.status) {
      case 'A':
        this.status = 'B';
        break;
      case 'B':
        this.status = 'C';
        break;
      default:
        this.status = 'A';
    }

    this.statusChange.next(this.status);
  }

}
