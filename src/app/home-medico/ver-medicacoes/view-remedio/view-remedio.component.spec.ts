import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRemedioComponent } from './view-remedio.component';

describe('ViewRemedioComponent', () => {
  let component: ViewRemedioComponent;
  let fixture: ComponentFixture<ViewRemedioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRemedioComponent]
    });
    fixture = TestBed.createComponent(ViewRemedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
