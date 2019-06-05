import { Component, OnInit } from '@angular/core';

import { $ } from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  company = {title: "CF-Korea"};
  

  constructor() { }

  ngOnInit() {
    
  }

}
