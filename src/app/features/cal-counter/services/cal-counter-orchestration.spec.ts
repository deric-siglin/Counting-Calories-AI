import { TestBed } from '@angular/core/testing';

import { CalCounterOrchestration } from './cal-counter-orchestration';

describe('CalCounterOrchestration', () => {
  let service: CalCounterOrchestration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalCounterOrchestration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
