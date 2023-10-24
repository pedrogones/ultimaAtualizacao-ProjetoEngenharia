import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaCadastradaComponent } from './receita-cadastrada.component';

describe('ReceitaCadastradaComponent', () => {
  let component: ReceitaCadastradaComponent;
  let fixture: ComponentFixture<ReceitaCadastradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitaCadastradaComponent]
    });
    fixture = TestBed.createComponent(ReceitaCadastradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
