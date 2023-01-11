import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <p>
      <a routerLink="">Home</a>
        |
      <a routerLink="about">About</a>
    </p>
  `,
  styles: [
  ]
})
export class NavigationComponent {

}
