import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerStatusToggleComponent } from './passenger-status-toggle.component';

describe('PassengerStatusToggleComponent', () => {
  let component: PassengerStatusToggleComponent;
  let fixture: ComponentFixture<PassengerStatusToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerStatusToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerStatusToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
