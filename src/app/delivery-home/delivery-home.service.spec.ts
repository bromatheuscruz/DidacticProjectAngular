import { TestBed, inject } from '@angular/core/testing';

import { DeliveryHomeService } from './delivery-home.service';

describe('DeliveryHomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliveryHomeService]
    });
  });

  it('should be created', inject([DeliveryHomeService], (service: DeliveryHomeService) => {
    expect(service).toBeTruthy();
  }));
});
