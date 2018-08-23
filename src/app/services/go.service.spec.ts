import { TestBed, inject } from '@angular/core/testing';

import { GoService } from './go.service';

describe('GoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoService]
    });
  });

  it('should be created', inject([GoService], (service: GoService) => {
    expect(service).toBeTruthy();
  }));
});
