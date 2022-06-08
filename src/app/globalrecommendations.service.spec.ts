import { TestBed } from '@angular/core/testing';

import { GlobalrecommendationsService } from './globalrecommendations.service';

describe('GlobalrecommendationsService', () => {
  let service: GlobalrecommendationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalrecommendationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
