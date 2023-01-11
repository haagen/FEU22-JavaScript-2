import { Component } from '@angular/core';
import { State } from './state';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  template: `
    <p>
      Timer: {{ this.state.timer }}
    </p>
    <button (click)="onStartClick()">Start</button>
    <button (click)="onResetClick()">Reset</button>
  `,
  styles: []
})
export class AppComponent {

  state!: State;                // This attribute contains the state - it is used to determine how the component should render
  
  constructor(private _state: StateService) {
      this.state = this._state.state;
   }

  onStartClick() {
    this._state.timerStart();
  }

  onResetClick() {
    this._state.timerReset();
  }
}
