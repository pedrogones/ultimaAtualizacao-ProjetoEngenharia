import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Medicacoes2Component } from './medicacoes2.component';

describe('Medicacoes2Component', () => {
  let component: Medicacoes2Component;
  let fixture: ComponentFixture<Medicacoes2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Medicacoes2Component]
    });
    fixture = TestBed.createComponent(Medicacoes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
