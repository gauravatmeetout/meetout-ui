import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from 'src/app/components/partials/sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  viewProviders:[
    SidebarComponent
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
