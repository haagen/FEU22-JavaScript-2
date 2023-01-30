import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { FSDocument } from '../document';

@Component({
  selector: 'app-leaderboard',
  template: `
    <div class="container">
      <h2>Top10-list</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Points</th>
          <th>Reaction time</th>
        </tr>
        <tr *ngFor="let player of top10 | async">
          <td>{{ player.name }}</td>
          <td>{{ player.points }}</td>
          <td>{{ player.reaction }}</td>
        </tr>
      </table>
      <h2>Fastest Player</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Points</th>
          <th>Reaction time</th>
        </tr>
        <tr *ngFor="let player of fastest | async">
          <td>{{ player.name }}</td>
          <td>{{ player.points }}</td>
          <td>{{ player.reaction }}</td>
        </tr>
      </table>
      <button (click)="backToGame()">Back to game</button>
    </div>
  `,
  styles: [
    `
      .container {
        margin: auto;
      }

      table {
        width: 500px;
      }

      th,
      td {
        text-align: left;
      }
    `,
  ],
})
export class LeaderboardComponent {
  top10: any = this.__db.getTop10List();
  fastest: any = this.__db.getFastestPlayer();

  constructor(private __db: DatabaseService, private __router: Router) {}

  backToGame() {
    this.__router.navigate(['']);
  }
}
