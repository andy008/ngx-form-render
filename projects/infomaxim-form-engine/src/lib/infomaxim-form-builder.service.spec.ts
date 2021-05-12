import { TestBed } from '@angular/core/testing';

import { InfomaximFormBuilderService } from './infomaxim-form-builder.service';

describe('InfomaximFormBuilderService', () => {
  let service: InfomaximFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfomaximFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
