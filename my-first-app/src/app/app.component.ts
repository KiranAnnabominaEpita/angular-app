import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//   styles: [`
//   h3 {
//     color: dodgerblue;
//   }
// `]
})
export class AppComponent {
   userName= '';
   showSecret = false;
   log = [];

   onToggleDisplay() {
     this.showSecret = !this.showSecret;
     this.log.push(this.log.length + 1);
   }
}