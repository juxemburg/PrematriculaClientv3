import { TestBed, inject } from '@angular/core/testing';

import { MatriculaService } from './matricula.service';

describe('MatriculaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatriculaService]
    });
  });

  it('should be created', inject([MatriculaService], (service: MatriculaService) => {
    expect(service).toBeTruthy();
  }));
});
