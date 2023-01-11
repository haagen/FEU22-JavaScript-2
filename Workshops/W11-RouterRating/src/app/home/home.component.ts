import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      <a routerLink="rating/1">Rate 1</a><br />
      <a routerLink="rating/2">Rate 2</a><br />
      <a routerLink="rating/3">Rate 3</a><br />
      <a routerLink="rating/4">Rate 4</a><br />
      <a [routerLink]="['rating', 5]">Rate 5</a><br />
    </p>
  `,
  styles: [
  ]
})
export class HomeComponent {

}
