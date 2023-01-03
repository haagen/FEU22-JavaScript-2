import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navigation></app-navigation>
  <hr>
  <router-outlet></router-outlet>
  <hr>
  `,
  styles: [``]
})
export class AppComponent {

}
