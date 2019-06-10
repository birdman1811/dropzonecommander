import { TestBed } from '@angular/core/testing';

import { TransportsetterService } from './transportsetter.service';

describe('TransportsetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransportsetterService = TestBed.get(TransportsetterService);
    expect(service).toBeTruthy();
  });
});
