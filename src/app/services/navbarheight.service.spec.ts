import { TestBed } from '@angular/core/testing';

import { NavbarheightService } from './navbarheight.service';

describe('NavbarheightService', () => {
  let service: NavbarheightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarheightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
