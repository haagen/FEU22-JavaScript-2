import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  template: `
    <form #theMathForm="ngForm" (ngSubmit)="doCalc()">
      <input type="number" required id="tal1" [(ngModel)]="mathForm.tal1" name="tal1">
      <select [(ngModel)]="mathForm.operation" name="operation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
      </select>
      <input type="number" required id="tal2" [(ngModel)]="mathForm.tal2" name="tal2">
      <button type="submit" [disabled]="!theMathForm.valid">Submit</button>
    </form>
    Resultatet är: {{ result }}
  `,
  styles: [
  ]
})
export class FormsComponent {
  mathForm : MathsForms  = { tal1: 0, tal2: 0, operation: '+' };
  result: number = 0;
  doCalc() {
    switch(this.mathForm.operation) {
      case '+':
        this.result = this.mathForm.tal1 + this.mathForm.tal2;
        break;
      case '-':
        this.result = this.mathForm.tal1 - this.mathForm.tal2;
        break;
      case '*':
        this.result = this.mathForm.tal1 * this.mathForm.tal2;
        break;  
      default: 
        console.warn('Unknown operation: ' + this.mathForm.operation);      
    }
  }
}

type MathsForms = { tal1: number, tal2: number, operation: string };