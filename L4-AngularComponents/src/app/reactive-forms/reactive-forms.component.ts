import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { CustomValidations } from '../customValidators';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  template: `
    <div class="container">
      <h1>Contact Form</h1>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            formControlName="name"
          />
        </div>
        <div class="alert alert-danger" *ngIf="f.name.touched && !f.name.valid">
          Name is a required field
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            class="form-control"
            formControlName="email"
          />
        </div>
        <ng-container *ngIf="f.email.touched && f.email.errors">
          <div class="alert alert-danger" *ngIf="f.email.errors['required']">
            Email is a required field
          </div>
          <div class="alert alert-danger" *ngIf="f.email.errors['email']">
            Email is not valid
          </div>
        </ng-container>
        <div class="form-group">
          <label for="message">Message</label>
          <input
            type="text"
            id="message"
            class="form-control"
            formControlName="message"
          />
        </div>
        <ng-container *ngIf="f.message.touched && f.message.errors">
          <div class="alert alert-danger" *ngIf="f.message.errors['required']">
            Message is a required field
          </div>
          <div
            class="alert alert-danger"
            *ngIf="f.message.errors['minCharacters']"
          >
            You have to suply 10 characters in the message box
          </div>
        </ng-container>
        <button type="submit" class="btn btn-primary" [disabled]="false">
          Submit
        </button>
      </form>
    </div>

    {{ output }}
  `,
  styles: [],
})
export class ReactiveFormsComponent implements OnInit {
  output = '';
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    message: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        (control: AbstractControl) => {
          return CustomValidations.minCharacters(control, 5);
        },
      ])
    ),
  });

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    /*
    this.form.valueChanges.subscribe((newValues) => {
      console.log('New data in form: ', newValues);
    });
    this.form.controls.email.valueChanges.subscribe((newValue) => {
      console.log('New value email: ', newValue);
    });
    */
    this.form.statusChanges
      .pipe(distinctUntilChanged())
      .subscribe((newStatus) => {
        console.log('Form status changed: ', newStatus);
      });

    this.form.controls.name.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((newValue) => {
        console.log('New value name: ', newValue);
      });
  }

  onSubmit() {
    console.log('Form is valid ', this.form.valid);
    console.log('Form control email is valid ', this.form.controls.email.valid);
    console.log('Vår modell (form) ', this.form.value);
    console.log('Vår modell (controll) ', this.form.controls.name.value);
    this.form.controls.name.setValue('Martin');
    this.form.patchValue({ email: 'martin@mbh.se', message: 'Ring mig!' });
  }
}
