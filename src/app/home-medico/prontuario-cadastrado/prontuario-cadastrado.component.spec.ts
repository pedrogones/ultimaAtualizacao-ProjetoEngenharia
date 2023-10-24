import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioCadastradoComponent  } from './prontuario-cadastrado.component';

describe('ProntuarioMedicoComponent', () => {
  let component: ProntuarioCadastradoComponent;
  let fixture: ComponentFixture<ProntuarioCadastradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProntuarioCadastradoComponent]
    });
    fixture = TestBed.createComponent(ProntuarioCadastradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
