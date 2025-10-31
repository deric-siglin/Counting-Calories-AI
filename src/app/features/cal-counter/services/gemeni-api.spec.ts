import { TestBed } from '@angular/core/testing';

import { GemeniApi } from './gemeni-api';

describe('GemeniApi', () => {
  let service: GemeniApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GemeniApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
