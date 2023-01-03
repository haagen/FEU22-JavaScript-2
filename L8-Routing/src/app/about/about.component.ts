import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  template: `
    <p>
      <button (click)="onBtnClick()">Don't press me!</button>
    </p>
  `,
  styles: [
  ]
})
export class AboutComponent {

  constructor(private _router: Router) {}

  onBtnClick() {
    alert("You shouldn't have");

    this._router.navigate(['/blog', 3]);
  }

}
