import { TestBed } from '@angular/core/testing';

import { LinguicaService } from './linguica.service';

describe('LinguicaService', () => {
  let service: LinguicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinguicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
