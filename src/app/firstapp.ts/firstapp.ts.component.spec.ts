import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstappTsComponent } from './firstapp.ts.component';

describe('FirstappTsComponent', () => {
  let component: FirstappTsComponent;
  let fixture: ComponentFixture<FirstappTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstappTsComponent]
    });
    fixture = TestBed.createComponent(FirstappTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
