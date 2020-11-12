import { TestBed } from '@angular/core/testing';

import { LeaderboardApiService } from './leaderboard-api.service';

describe('LeaderboardApiService', () => {
  let service: LeaderboardApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaderboardApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
