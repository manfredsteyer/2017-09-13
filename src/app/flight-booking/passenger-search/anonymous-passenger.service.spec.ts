import { TestBed, inject } from '@angular/core/testing';

import { AnonymousPassengerService } from './anonymous-passenger.service';

describe('AnonymousPassengerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnonymousPassengerService]
    });
  });

  it('should be created', inject([AnonymousPassengerService], (service: AnonymousPassengerService) => {
    expect(service).toBeTruthy();
  }));
});
