import { Component, OnInit } from '@angular/core';
// import { Server } from 'http';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', //attribute 
  // selector: '.app-servers',
  template: `
      <app-server></app-server>
      <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
