import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerCardComponent } from './passenger-card.component';

describe('PassengerCardComponent', () => {
  let component: PassengerCardComponent;
  let fixture: ComponentFixture<PassengerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
