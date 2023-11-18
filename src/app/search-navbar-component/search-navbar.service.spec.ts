import { TestBed } from '@angular/core/testing';

import { SearchNavbarService } from './search-navbar.service';

describe('SearchNavbarService', () => {
  let service: SearchNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
