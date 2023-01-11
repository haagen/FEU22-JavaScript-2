import { Component, Input, Output, EventEmitter } from '@angular/core';
import Toy from '../types';

@Component({
  selector: 'app-child',
  template: `
      <h1>
        Welcome to {{title}}!
      </h1>

        {{ name }}

        <ng-container *ngIf="name != 'Victor'; else noIceCream">
          <button (click)="onGlassBtnClick()">Jag vill ha glass</button>
        </ng-container>
        <ng-template #noIceCream>
          Tyvärr, glassen tog just slut!
        </ng-template>

  `,
  styles: [
  ]
})
export class ChildComponent {
  title = 'Child';
  iceCreamCounter: number = 0;
  leksak: Toy = { name: 'Puzzle', state: 'broken' };

  @Input() name: string = 'Anna';
  @Output() icecream = new EventEmitter<number>();

  onGlassBtnClick() {
    this.iceCreamCounter++;
    this.icecream.emit(this.iceCreamCounter);
  }
} 
