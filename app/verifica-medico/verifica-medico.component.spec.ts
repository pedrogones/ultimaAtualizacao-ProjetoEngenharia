import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificaMedicoComponent } from './verifica-medico.component';

describe('VerificaMedicoComponent', () => {
  let component: VerificaMedicoComponent;
  let fixture: ComponentFixture<VerificaMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificaMedicoComponent]
    });
    fixture = TestBed.createComponent(VerificaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
