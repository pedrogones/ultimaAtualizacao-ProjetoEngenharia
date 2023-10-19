import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadReceitaComponent } from './cad-receita.component';

describe('CadReceitaComponent', () => {
  let component: CadReceitaComponent;
  let fixture: ComponentFixture<CadReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadReceitaComponent]
    });
    fixture = TestBed.createComponent(CadReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
