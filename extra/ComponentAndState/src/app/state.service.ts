import { Injectable } from '@angular/core';
import { State } from './state';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private stateSubject = new BehaviorSubject<State>({ timer: 0 });
  private state: State = { timer: 0 };  // State
  private interval: any = null;

  constructor() { }

  getState() {
    return this.stateSubject.asObservable();
  }

  private stateChanged() {
    this.stateSubject.next({ ...this.state }); // Send a copy of the state
  }

  timerStart() {
    // Do not start the timer if count is 0 or less or if there is a timer running
    if (this.state.timer <= 0 || this.interval != null) return;
    this.interval = setInterval(() => {       // Start the interval
      this.state.timer--;                     // Reduce timer by 1
      this.stateChanged();
      if(this.state.timer <= 0) {             // Time to stop?
        clearInterval(this.interval);         // Stop the interval
        this.interval = null;                 // Clear interval
      }
    }, 1000);
  }

  timerReset() {
    if (this.interval != null) {              // If the interval is on - stop it
      clearInterval(this.interval);
      this.interval = null;
    }
    this.state.timer = 60;                    // Reset the timer
    this.stateChanged();
  }


}
