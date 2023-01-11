import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogsModifyComponent } from './dogs-modify/dogs-modify.component';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: DogsListComponent },
  { path: 'edit', component: DogsModifyComponent, canActivate: [ LoginService ] },        // Here we are using the CanActivate() method in the LoginService
  { path: 'edit/:id', component: DogsModifyComponent, canActivate: [ LoginService ]  },   // to see if the user should be able to activate (go to the) route
  { path: 'login', component: LoginComponent },
  { path: 'login/:error', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup/:error', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
