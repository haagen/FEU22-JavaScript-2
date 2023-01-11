import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  template: `
    <p>
      <button (click)="onBtnClick()">Home</button>
      <button (click)="onRateBtnClick(5)">Rate 5</button>
    </p>
  `,
  styles: [
  ]
})
export class AboutComponent {

  constructor(private __router: Router) { }

  onBtnClick() {
    this.__router.navigate(['']);
  }

  onRateBtnClick(rate: number) {
    this.__router.navigate(['rating', rate]);
  }

}
