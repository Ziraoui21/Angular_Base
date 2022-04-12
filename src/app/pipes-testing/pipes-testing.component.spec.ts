import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesTestingComponent } from './pipes-testing.component';

describe('PipesTestingComponent', () => {
  let component: PipesTestingComponent;
  let fixture: ComponentFixture<PipesTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
