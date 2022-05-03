import { TestBed } from '@angular/core/testing';

import { GamesofthronesService } from './gamesofthrones.service';

describe('GamesofthronesService', () => {
  let service: GamesofthronesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesofthronesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
