import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Passenger } from '../../entities/passenger';

@Component({
  selector: 'passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.css']
})
export class PassengerCardComponent implements OnInit {

  constructor() { }

  @Input() item: Passenger;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit() {
  }

  select() {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(false);
  }

}
