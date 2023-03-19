import { TestBed } from '@angular/core/testing';

import { CucinaService } from './cucina.service';

describe('CucinaService', () => {
  let service: CucinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CucinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
