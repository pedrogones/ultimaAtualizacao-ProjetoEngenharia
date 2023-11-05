import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarReceitaComponent } from './enviar-receita.component';

describe('EnviarReceitaComponent', () => {
  let component: EnviarReceitaComponent;
  let fixture: ComponentFixture<EnviarReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnviarReceitaComponent]
    });
    fixture = TestBed.createComponent(EnviarReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
