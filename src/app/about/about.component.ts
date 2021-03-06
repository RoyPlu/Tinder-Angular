import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { TinderService } from '../services/tinder.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() data;
  
  constructor(private service: TinderService) { }

  ngOnInit(){

  }
}
