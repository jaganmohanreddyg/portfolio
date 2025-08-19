import { Component, OnInit, AfterViewInit } from '@angular/core';

import {trigger, state, style, animate, transition, stagger, query } from "@angular/animations"
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('bannerTrigger', [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateX(-50px)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {
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
