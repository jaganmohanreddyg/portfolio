import { TestBed } from '@angular/core/testing';

import { ExperienceService } from './experience.service';

describe('ExperienceService', () => {
  let service: ExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate experience correctly', () => {
    const startDate = new Date('2022-06-01');
    const result = service.calculateExperience(startDate);
    expect(result).toMatch(/^\d+(\.\d+)?$/); // Should be number or number.number format
  });
});