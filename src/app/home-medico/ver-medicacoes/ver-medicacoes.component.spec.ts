import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMedicacoesComponent } from './ver-medicacoes.component';

describe('VerMedicacoesComponent', () => {
  let component: VerMedicacoesComponent;
  let fixture: ComponentFixture<VerMedicacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerMedicacoesComponent]
    });
    fixture = TestBed.createComponent(VerMedicacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
