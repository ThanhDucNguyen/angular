import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSelectboxComponent } from './test-selectbox.component';

describe('TestSelectboxComponent', () => {
  let component: TestSelectboxComponent;
  let fixture: ComponentFixture<TestSelectboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSelectboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSelectboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
