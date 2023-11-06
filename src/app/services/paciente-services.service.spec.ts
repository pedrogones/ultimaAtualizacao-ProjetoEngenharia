import { TestBed } from '@angular/core/testing';

import { PacienteServicesService } from './paciente-services.service';

describe('PacienteServicesService', () => {
  let service: PacienteServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacienteServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
