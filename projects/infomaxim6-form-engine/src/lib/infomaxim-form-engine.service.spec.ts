import { TestBed } from '@angular/core/testing';

import { InfomaximFormEngineService } from './infomaxim-form-engine.service';

describe('InfomaximFormEngineService', () => {
  let service: InfomaximFormEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfomaximFormEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
