import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosListaComponent } from './medicamentos-lista.component';

describe('MedicamentosListaComponent', () => {
  let component: MedicamentosListaComponent;
  let fixture: ComponentFixture<MedicamentosListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicamentosListaComponent]
    });
    fixture = TestBed.createComponent(MedicamentosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
