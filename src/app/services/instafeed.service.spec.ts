import { TestBed, inject } from '@angular/core/testing';

import { InstafeedService } from './instafeed.service';

describe('InstafeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstafeedService]
    });
  });

  it('should be created', inject([InstafeedService], (service: InstafeedService) => {
    expect(service).toBeTruthy();
  }));
});
