import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { ExperienceService } from 'src/app/services/experience/experience.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
experienceYears: string = '';

  constructor(
    public analyticsService: AnalyticsService,
    private experienceService: ExperienceService
  ) { }

  ngOnInit(): void { 
        this.experienceYears = this.experienceService.calculateExperience(new Date("2022-06-01"));

  }
  
}
