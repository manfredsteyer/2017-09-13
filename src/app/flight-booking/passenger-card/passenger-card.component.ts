import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Passenger } from '../../entities/passenger';

@Component({
  selector: 'passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.css']
})
export class PassengerCardComponent implements OnInit, OnDestroy, OnChanges {

  constructor() {
    console.debug('ctor', this.selected, this.item)
  }

  @Input() item: Passenger;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit() {
    console.debug('init', this.selected, this.item);
    // Would introduce cycle --> is not allowed
    // this.selectedChange.next(true);
  }

  ngOnDestroy(): void {
    console.debug('destroy', this.selected, this.item)
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.debug('changes', this.selected, this.item)
    if (changes['selected']) {
      console.debug('selected changed');
    }
    if (changes['item']) {
      console.debug('item changed');
    }

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
