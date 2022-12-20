import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'L4-AngularComponents';
  appComponentClock: number = 25;

  constructor() {
    setTimeout(() => {
      this.appComponentClock = 125;
    }, 5000);
  }

  handleClockReset(oldClockTime: number) {
    alert('The Clock was reset! (' + oldClockTime + ')');
  }

}
