import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-bindings 
      [counter]="5" 
      (counterChanged)="onCounterChanged($event)">
    </app-bindings>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'W6-Bindings';

  onCounterChanged(counter: number) {
    alert('The new value of counter is ' + counter);
  }
}
