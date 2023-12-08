import { TestBed } from '@angular/core/testing';

import { ZapierService } from './zapier.service';

describe('ZapierService', () => {
  let service: ZapierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZapierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
