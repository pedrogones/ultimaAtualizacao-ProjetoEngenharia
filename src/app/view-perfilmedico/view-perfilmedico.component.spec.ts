import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPerfilmedicoComponent } from './view-perfilmedico.component';

describe('ViewPerfilmedicoComponent', () => {
  let component: ViewPerfilmedicoComponent;
  let fixture: ComponentFixture<ViewPerfilmedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPerfilmedicoComponent]
    });
    fixture = TestBed.createComponent(ViewPerfilmedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
