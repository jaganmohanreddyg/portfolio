import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from "src/app/services/language/language.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Jagan-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {
  }
  ngOnInit(): void {

    this.languageService.initLanguage()

    this.titleService.setTitle("Jaganmohan Reddy | Java Full Stack Developer | Software Engineer | IIIT Dharwad");
    this.metaService.addTags([
      { name: 'keywords', content: 'Backend, Java Full Stack Developer , Full Stack Development , Software Engineer, software, developer' },
      { name: 'description', content: 'Java Full Stack Developer with strong proficiency in Java Spring Boot and Angular. Experienced in designing high-performance APIs, driving POCs, and optimizing deployments. Expertise in scaling solutions within Microservices architectures and integrating frontend applications. Skilled in deploying applications on AWS, consistently delivering scalable and reliable software solutions.' },
    ]);
    
    AOS.init();


  }
}
