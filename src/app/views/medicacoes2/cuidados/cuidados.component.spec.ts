import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadosComponent } from './cuidados.component';

describe('CuidadosComponent', () => {
  let component: CuidadosComponent;
  let fixture: ComponentFixture<CuidadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuidadosComponent]
    });
    fixture = TestBed.createComponent(CuidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
