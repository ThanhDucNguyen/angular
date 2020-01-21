import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormValidationComponent } from './test-form-validation.component';

describe('TestFormValidationComponent', () => {
  let component: TestFormValidationComponent;
  let fixture: ComponentFixture<TestFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
