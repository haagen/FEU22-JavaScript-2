import { Component } from '@angular/core';
import { PlayService } from '../play.service';
import { State } from '../state';

@Component({
  selector: 'app-playboard',
  template: `
    <div class="dashboard">
      <app-dashboard
        [gameState]="gameState"
        (startGame)="onStartGameClick($event)"
      ></app-dashboard>
    </div>
    <div class="playboard">
      <app-mole
        *ngFor="let hole of gameState.holes; let i = index"
        [hole]="hole"
        (clickedMole)="onClickedMole(i)"
      ></app-mole>
    </div>
  `,
  styles: [
    `
      .playboard {
        width: 550px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      .dashboard {
        width: 550px;
        margin-bottom: 10px;
      }
    `,
  ],
})
export class PlayboardComponent {
  gameState!: State;

  constructor(private __ps: PlayService) {
    this.__ps.getStateObservable().subscribe((newState) => {
      this.gameState = newState; // Subscribe to state changes
    });
  }

  onClickedMole(holeIdx: number) {
    this.__ps.moleClicked(holeIdx);
  }

  onStartGameClick(newName: string) {
    this.__ps.setPlayerName(newName);
    this.__ps.startGameLoop();
  }
}
