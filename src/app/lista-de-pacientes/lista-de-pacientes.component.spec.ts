import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePacientesComponent } from './lista-de-pacientes.component';

describe('ListaDePacientesComponent', () => {
  let component: ListaDePacientesComponent;
  let fixture: ComponentFixture<ListaDePacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDePacientesComponent]
    });
    fixture = TestBed.createComponent(ListaDePacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
