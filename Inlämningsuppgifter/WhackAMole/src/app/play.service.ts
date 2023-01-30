import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Data } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DatabaseService } from './database.service';
import { Hole } from './hole';
import { State } from './state';

@Injectable({
  providedIn: 'root',
})
export class PlayService {
  // Constants for the game
  readonly numberOfHoles = 25;
  readonly maxNumberVisible = 3;
  readonly numberOfSecond = 60;

  // Internal state variables -- these are all private
  private state: State = {
    holes: [],
    score: 0,
    time: 60,
    started: false,
    timerTicks: 0,
    reactionTime: undefined,
  };
  private stateBehaviour = new BehaviorSubject<State>({ ...this.state });
  private timer!: NodeJS.Timer;
  private visibleMoles: number = 0;

  constructor(private __db: DatabaseService, private __router: Router) {
    this.getNewBoard(); // Initialize the game
    this.stateChange(); // Send state to subscribers
  }

  // This method will submit the state to the observers
  stateChange() {
    this.stateBehaviour.next({ ...this.state });
  }

  // This will return an Obserbable - subscribing to it will provide the game state
  getStateObservable() {
    return this.stateBehaviour.asObservable();
  }

  setPlayerName(name: string) {
    this.state.playerName = name;
    this.stateChange();
  }

  getNewBoard() {
    this.state.holes = []; // Delete any moles
    for (let i = 0; i < this.numberOfHoles; i++) {
      // Create the moles in the internal state
      this.state.holes.push({
        moleVisible: false, // All moles will start out as invisible
      });
    }
    this.state.reactionTime = undefined;
    this.state.score = 0; // Start with 0 points
    this.state.time = this.numberOfSecond; // Reset the timer
    this.state.started = false; // Reset the started variable (maks the game startable)
    this.state.timerTicks = this.numberOfSecond * 10; // Reset timer variable
    this.visibleMoles = 0; // Resets the number of visible moles
  }

  startGameLoop() {
    this.getNewBoard(); // Reset the game
    this.state.started = true; // Mark it as started

    this.timer = setInterval(() => {
      this.gameLoop(); // Start the game-loop
    }, 100);

    this.stateChange(); // Submit the state to the subscribers
  }

  stopGameLoop() {
    this.state.started = false; // Mark as not running
    clearInterval(this.timer); // Stop the interval (game-loop)
    this.stateChange(); // Submit the state to the subscribers
    this.__db.savePlayer({
      name: this.state.playerName ? this.state.playerName : 'Mr John Doe',
      points: this.state.score,
      reaction: this.state.reactionTime
        ? this.state.reactionTime
        : Number.MIN_SAFE_INTEGER,
    });
    this.__router.navigate(['leaderboard']);
  }

  private gameLoop() {
    this.state.timerTicks--; // Decrease timer
    this.state.time = Math.ceil(this.state.timerTicks / 10); // Update the user visable timer (clock)
    if (!this.state.timerTicks) {
      // Time is up
      this.stopGameLoop(); // Stop the game
      return;
    }

    if (this.visibleMoles < this.maxNumberVisible) {
      // Is there room for more Moles on the board
      if (this.randomizer(100) < 15) {
        // 14% chance to get a mole - this could be made higher as time goes on...
        // This will make the appearance be random
        let nextMole = this.getNextRandomFreeHole(); // Get a free gole
        this.moleVisiblity(this.state.holes[nextMole], true);
        this.state.holes[nextMole].showTime = new Date();
        this.state.holes[nextMole].timer = setTimeout(
          (hole: Hole) => {
            // Start 4 second time to hide unclicked moles
            if (!this.state.started) return;
            this.moleVisiblity(this.state.holes[nextMole], false);
            this.stateChange(); // Send new state to subscribers
          },
          4000,
          this.state.holes[nextMole]
        ); // Tell the timeout which mole to hide after 4000ms
      }
    }
    this.stateChange(); // Send new state to subscribers
  }

  moleClicked(idx: number) {
    if (this.state.holes[idx].moleVisible && this.state.started) {
      // Only allow "clicking" visible moles while game is running
      this.state.score++; // Increase points
      this.moleVisiblity(this.state.holes[idx], false); // Hide mole
      if (this.state.holes[idx].showTime !== undefined) {
        let newReactionTime =
          (new Date() as any) - (this.state.holes[idx].showTime as any);
        if (
          this.state.reactionTime == undefined ||
          this.state.reactionTime > newReactionTime
        ) {
          this.state.reactionTime = newReactionTime;
        }
        this.state.holes[idx].showTime = undefined;
      }
      if (this.state.holes[idx].timer !== undefined) {
        // Check that we have a timer
        clearTimeout(this.state.holes[idx].timer); // Reset timeout for this hole
      }
      this.stateChange(); // Send new state to subscribers
    }
  }

  // Internal state method that will show mole and increase or decrease the mole counter
  private moleVisiblity(hole: Hole, show: boolean) {
    hole.moleVisible = show; // Show or hide the mole
    show ? this.visibleMoles++ : this.visibleMoles--; // Inreas or decrease mole couter
  }

  private getNextRandomFreeHole(): number {
    // This method will find a free random hole
    let next = 0;
    do {
      next = this.randomizer(this.numberOfHoles); // Get a random number
    } while (this.state.holes[next].moleVisible); // Is the hole free?
    return next; // return value
  }

  private randomizer(max: number): number {
    // Return a random number
    return Math.floor(Math.random() * (max + 1));
  }
}
