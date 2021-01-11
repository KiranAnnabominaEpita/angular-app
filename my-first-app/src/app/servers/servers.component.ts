import { Component, OnInit } from '@angular/core';
// import { Server } from 'http';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', //attribute 
  // selector: '.app-servers',
  // template: `
  //     <app-server></app-server>
  //     <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  username= '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }   

  ngOnInit(): void {

  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name of the server is ' +this.serverName ;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  } 
  
  resetButton() {
    this.username = this.username;
  }

}
