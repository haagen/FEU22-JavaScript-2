import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <ul>
      <li><a routerLink="">Home</a></li>
      <li><a routerLink="about">About</a></li>
      <li><a routerLink="blog">Blog</a></li>
    </ul>
  `,
  styles: [
  ]
})
export class NavigationComponent {

}
