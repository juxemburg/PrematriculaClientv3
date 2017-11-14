import { TestBed, inject } from '@angular/core/testing';

import { PrematriculaGuardService } from './prematricula-guard.service';

describe('PrematriculaGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrematriculaGuardService]
    });
  });

  it('should be created', inject([PrematriculaGuardService], (service: PrematriculaGuardService) => {
    expect(service).toBeTruthy();
  }));
});
