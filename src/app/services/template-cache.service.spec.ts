import { TestBed, inject } from '@angular/core/testing';

import { TemplateCacheService } from './template-cache.service';

describe('TemplateCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateCacheService]
    });
  });

  it('should be created', inject([TemplateCacheService], (service: TemplateCacheService) => {
    expect(service).toBeTruthy();
  }));
});
