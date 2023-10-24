import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Medicacoes3Component } from './medicacoes3.component';

describe('Medicacoes3Component', () => {
  let component: Medicacoes3Component;
  let fixture: ComponentFixture<Medicacoes3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Medicacoes3Component]
    });
    fixture = TestBed.createComponent(Medicacoes3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
