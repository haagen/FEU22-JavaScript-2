import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bindings',
  template: `
     Counter är nu {{ counter }}

     <button (click)="btnClickAddOne()">Add One</button>
  `,
  styles: [``]
})
export class BindingsComponent {

  @Input() counter: number = 0;
  @Output() counterChanged = new EventEmitter<number>();

  btnClickAddOne() {
    this.counter++;
    this.counterChanged.emit(this.counter);
  }

}
