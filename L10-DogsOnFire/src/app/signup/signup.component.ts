import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  template: `
    <h1>Signup for a new account</h1>
    <div class="alert alert-danger" *ngIf="error">
      {{ error }}
    </div>
    <form (ngSubmit)="onFormSubmit()" #userForm=ngForm>
      <div class="form-group">
        <label for="username">Username (email):</label>
        <input type="email" id="username" name="username" class="form-control" required [(ngModel)]="user.username" #username=ngModel>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" class="form-control" required [(ngModel)]="user.password" #password=ngModel>
      </div>
      <button type="submit" class="btn btn-primary" [disabled]="!userForm.form.valid">Create User</button>
    </form>
  `,
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  user: User = { username: '', password: '' };
  error: string = '';

  constructor(
    private __activatedRoute: ActivatedRoute,
    private __loginService: LoginService      // Create a login service using dependency injection
  ) {}


  onFormSubmit() {
    this.__loginService.createUser(this.user.username, this.user.password); // Use our createUser method in the loginservice to create a firebase user
  }

  ngOnInit(): void {
    this.__activatedRoute.params.subscribe( params => {
      this.error = params['error'];                                         // if we got an error message we will update the class attributes here
    });
  }

}
