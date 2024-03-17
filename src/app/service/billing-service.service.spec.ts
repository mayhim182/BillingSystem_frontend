import { TestBed } from '@angular/core/testing';

import { BillingServiceService } from './billing-service.service';

describe('BillingServiceService', () => {
  let service: BillingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
