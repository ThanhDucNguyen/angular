import { TestBed } from '@angular/core/testing';

import { ListScreenService } from './list-screen.service';

describe('ListScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListScreenService = TestBed.get(ListScreenService);
    expect(service).toBeTruthy();
  });
});
