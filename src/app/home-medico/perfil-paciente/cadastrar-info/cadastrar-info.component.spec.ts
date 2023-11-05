import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarInfoComponent } from './cadastrar-info.component';

describe('CadastrarInfoComponent', () => {
  let component: CadastrarInfoComponent;
  let fixture: ComponentFixture<CadastrarInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarInfoComponent]
    });
    fixture = TestBed.createComponent(CadastrarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
