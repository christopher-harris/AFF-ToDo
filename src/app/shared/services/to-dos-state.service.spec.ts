import { TestBed } from '@angular/core/testing';

import { ToDosStateService } from './to-dos-state.service';

describe('ToDosStateService', () => {
  let service: ToDosStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDosStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
