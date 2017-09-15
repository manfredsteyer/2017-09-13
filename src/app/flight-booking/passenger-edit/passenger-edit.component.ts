import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'passenger-edit',
  templateUrl: './passenger-edit.component.html',
  styleUrls: ['./passenger-edit.component.css']
})
export class PassengerEditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id: string;
  showDetails: string;

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p ['showDetails'];
    })
  }

}
