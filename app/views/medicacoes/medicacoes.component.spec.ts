import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicacoesComponent } from './medicacoes.component';

describe('MedicacoesComponent', () => {
  let component: MedicacoesComponent;
  let fixture: ComponentFixture<MedicacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicacoesComponent]
    });
    fixture = TestBed.createComponent(MedicacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
