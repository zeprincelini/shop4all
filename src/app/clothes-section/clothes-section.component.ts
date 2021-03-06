import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clothes-section',
  templateUrl: './clothes-section.component.html',
  styleUrls: ['./clothes-section.component.css']
})
export class ClothesSectionComponent implements OnInit {
navLinks : any[];
activeLinkIndex = -1;
  constructor(private router: Router, private currentRoute: ActivatedRoute) { 
    this.navLinks = [
      {
        label: 'Male',
        link: './',
        index: 0
      }, {
        label: 'Female',
        link: './female',
        index: 1
      }
    ];
  }
  ngOnInit(){
    //this.navLinks[0].link = this.router.navigate(['male'], {relativeTo: this.currentRoute});
  }

}
