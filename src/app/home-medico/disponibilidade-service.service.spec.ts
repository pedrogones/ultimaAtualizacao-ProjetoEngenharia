import { TestBed } from '@angular/core/testing';

import { DisponibilidadeServiceService } from './disponibilidade-service.service';

describe('DisponibilidadeServiceService', () => {
  let service: DisponibilidadeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisponibilidadeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
