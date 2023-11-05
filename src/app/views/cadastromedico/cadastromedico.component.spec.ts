import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastromedicoComponent } from './cadastromedico.component';

describe('CadastromedicoComponent', () => {
  let component: CadastromedicoComponent;
  let fixture: ComponentFixture<CadastromedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastromedicoComponent]
    });
    fixture = TestBed.createComponent(CadastromedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
