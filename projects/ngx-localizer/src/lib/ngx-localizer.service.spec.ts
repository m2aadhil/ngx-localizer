import { TestBed } from '@angular/core/testing';
import { NgxLocalizerService } from './ngx-localizer.service';

describe('NgxLocalizerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLocalizerService = TestBed.get(NgxLocalizerService);
    expect(service).toBeTruthy();
  });
});
