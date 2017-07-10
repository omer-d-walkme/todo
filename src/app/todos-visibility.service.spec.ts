import { TestBed, inject } from '@angular/core/testing';

import { TodosVisibilityService } from './todos-visibility.service';

describe('TodosVisibilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosVisibilityService]
    });
  });

  it('should be created', inject([TodosVisibilityService], (service: TodosVisibilityService) => {
    expect(service).toBeTruthy();
  }));
});
