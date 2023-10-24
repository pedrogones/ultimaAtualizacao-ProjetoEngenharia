import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuidados3Component } from './cuidados3.component';

describe('Cuidados3Component', () => {
  let component: Cuidados3Component;
  let fixture: ComponentFixture<Cuidados3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cuidados3Component]
    });
    fixture = TestBed.createComponent(Cuidados3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
