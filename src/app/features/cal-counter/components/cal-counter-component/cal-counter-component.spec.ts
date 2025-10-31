import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalCounterComponent } from './cal-counter-component';

describe('CalCounterComponent', () => {
  let component: CalCounterComponent;
  let fixture: ComponentFixture<CalCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
