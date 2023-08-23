import { TestBed } from '@angular/core/testing';

import { CarvaoService } from './carvao.service';

describe('CarvaoService', () => {
  let service: CarvaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarvaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
