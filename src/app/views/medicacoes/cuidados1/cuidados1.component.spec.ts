import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuidados1Component } from './cuidados1.component';

describe('Cuidados1Component', () => {
  let component: Cuidados1Component;
  let fixture: ComponentFixture<Cuidados1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cuidados1Component]
    });
    fixture = TestBed.createComponent(Cuidados1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
