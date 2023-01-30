import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hole } from '../hole';

@Component({
  selector: 'app-mole',
  template: `
    <div class="moleHole hasMole">
      <img
        src="/assets/mole_100.png"
        *ngIf="hole.moleVisible"
        (click)="onClick()"
      />
    </div>
  `,
  styles: [
    `
      .moleHole {
        width: 100px;
        height: 100px;
        margin: 2px;
        background-image: url('/assets/hole_100.png');
        display: flex;
        justify-content: center;
        align-items: center;
        //border: 1px solid;
      }

      .moleHole img {
        width: 90px;
      }
    `,
  ],
})
export class MoleComponent {
  @Input() hole: Hole = { moleVisible: false };
  @Output() clickedMole = new EventEmitter<Hole>();

  onClick() {
    this.clickedMole.emit(this.hole); // Submit click-event to parent
  }
}
