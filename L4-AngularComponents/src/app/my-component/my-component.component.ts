import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
      <h2>{{ title }}</h2>
      <p class="red">This is from my inline template</p>

      <strong>Manual Indexing</strong>
      <ul>
        <li>{{ colors[0] }}</li>
        <li>{{ colors[1] }}</li>
        <li>{{ colors[2] }}</li>
      </ul>

      <strong>*ngFor</strong>
      <ul>
        <li *ngFor="let color of colors">{{ color }}</li>
      </ul>

      <span class="green" *ngIf="isValid">The Component is valid!</span>

      <span>Klockan är nu: {{ clock }}</span><br />
      <button (click)="onBtnClick()">Nollställ klockan</button>
  `,
  styles: [`
      .red {
        color: red;
      }

      .green {
        color: #00FF00;
      }
  `]
})
export class MyComponentComponent {

  isValid: boolean = false;
  title: string = 'My Beautiful Component';
  colors: string[] = ['Yellow', 'Brown', 'Red'];
  @Input() clock: number = 0;
  @Output() onClockReset = new EventEmitter<number>();  // void if no data to be emitted

  constructor() {
    setInterval(() => {
      this.clock++;
    }, 1000);
  }

  onBtnClick() {
    this.onClockReset.emit(this.clock);
    this.clock = 0;
  }

}
