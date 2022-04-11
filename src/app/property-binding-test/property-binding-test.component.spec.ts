import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingTestComponent } from './property-binding-test.component';

describe('PropertyBindingTestComponent', () => {
  let component: PropertyBindingTestComponent;
  let fixture: ComponentFixture<PropertyBindingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBindingTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBindingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
