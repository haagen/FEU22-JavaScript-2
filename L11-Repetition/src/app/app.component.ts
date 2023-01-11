import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>
        Welcome to {{title}}!
      </h1>
   

      <app-child [name]="wishedName" (icecream)="onIceCreamRequest($event)"></app-child>
  `,
  styles: []
})
export class AppComponent {
  title = 'Parent';
  wishedName = 'Åke';

  constructor() {
    setTimeout(() => {
      this.wishedName = 'Victor';
    }, 5000);
  }

  onIceCreamRequest(iceCreamCounter: number) {
    alert('The ' + this.wishedName + ' child want an icecream! (' + iceCreamCounter + ')');
  }
}
