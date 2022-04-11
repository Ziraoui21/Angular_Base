import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingEventsTestComponent } from './data-binding-events-test.component';

describe('DataBindingEventsTestComponent', () => {
  let component: DataBindingEventsTestComponent;
  let fixture: ComponentFixture<DataBindingEventsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingEventsTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingEventsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
