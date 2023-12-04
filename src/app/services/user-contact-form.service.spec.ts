import { TestBed } from '@angular/core/testing';

import { UserContactFormService } from './user-contact-form.service';

describe('UserContactFormService', () => {
  let service: UserContactFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserContactFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
