import { TestBed } from '@angular/core/testing';

import { PicanhaService } from './picanha.service';

describe('PicanhaService', () => {
  let service: PicanhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicanhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
