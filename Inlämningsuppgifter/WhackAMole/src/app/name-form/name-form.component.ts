import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-form',
  template: `
    <div id="nameForm">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <label for="name">Name</label>
        <input type="text" id="name" formControlName="name" />
        <button type="submit" [disabled]="!form.valid">Starta Spelet</button>
      </form>
    </div>
  `,
  styles: [],
})
export class NameFormComponent {
  form = new FormGroup({
    name: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
  });

  @Output() nameSupplied = new EventEmitter<string>();

  onSubmit() {
    if (this.form.valid) {
      this.nameSupplied.emit(this.form.controls.name.value as string);
      this.form.controls.name.setValue('');
    }
  }
}
