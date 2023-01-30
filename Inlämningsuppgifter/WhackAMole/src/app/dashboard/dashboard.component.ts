import { Component, Input, Output, EventEmitter } from '@angular/core';
import { State } from '../state';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dash">
      <div class="time">
        <h2>Time remaining:</h2>
        {{ gameState.time }}
      </div>
      <div class="score">
        <h2>Score:</h2>
        {{ gameState.score }}
      </div>
      <div class="raction">
        <ng-container *ngIf="gameState.reactionTime != undefined">
          <h2>Reaction Time:</h2>
          {{ gameState.reactionTime }}
        </ng-container>
      </div>
      <div class="start">
        <button
          (click)="startBtnClick()"
          [disabled]="gameState.started"
          *ngIf="showStart"
        >
          Start Game
        </button>
        <app-name-form
          *ngIf="!showStart"
          (nameSupplied)="gotNewName($event)"
        ></app-name-form>
      </div>
    </div>
  `,
  styles: [
    `
      .dash {
        display: flex;
        flex-wrap: wrap;
        width: 550px;
      }

      .time {
        width: 250px;
      }

      .score {
        width: 70px;
      }

      .start {
        width: 70px;
        display: flex;
        justify-content: right;
        align-items: right;
      }

      .reaction {
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      h2 {
        font-size: 12pt;
      }
    `,
  ],
})
export class DashboardComponent {
  @Input() gameState: State = {
    holes: [],
    score: 0,
    time: 0,
    started: false,
    timerTicks: 0,
    reactionTime: undefined,
  };
  @Output() startGame = new EventEmitter<string>();
  showStart: boolean = true;

  constructor() {}

  startBtnClick() {
    this.showStart = false;
  }

  gotNewName(newName: string) {
    this.startGame.emit(newName); // Submit clcick event to parent.
    this.showStart = true;
  }
}
