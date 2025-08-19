import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
experienceYears: string = '';

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void { 
        this.experienceYears = this.calculateExperience(new Date("2022-06-01"));

  }
  
    calculateExperience(startDate: Date): string {
    const now = new Date();
    const diffInMs = now.getTime() - startDate.getTime();
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25); // convert ms → years
    return diffInYears.toFixed(1); // e.g., "2.5"
  }
}
