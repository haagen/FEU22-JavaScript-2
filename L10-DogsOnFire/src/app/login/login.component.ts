import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  template: `
    <h1>Login to your account</h1>
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
      <button type="submit" class="btn btn-primary" [disabled]="!userForm.form.valid">Login</button>
    </form>
  `,
  styles: [
  ]
})
export class LoginComponent {
  user: User = { username: '', password: '' };
  error: string = '';

  constructor(
    private __activatedRoute: ActivatedRoute,
    private __loginService: LoginService
  ) {}


  onFormSubmit() {
   this.__loginService.loginUser(this.user.username, this.user.password); // Use the login service log the user into firebase
  }

  ngOnInit(): void {
    this.__activatedRoute.params.subscribe( params => {
      this.error = params['error'];
    });
  }
}
