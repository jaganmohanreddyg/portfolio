import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  calculateExperience(startDate: Date): string {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth() + 1;

    // If months go negative, adjust years
    if (months < 0) {
      years--;
      months += 12;
    }

    // Return just years if months is 0, otherwise include months
    return months === 0 ? `${years}` : `${years}.${months}`;
  }
}