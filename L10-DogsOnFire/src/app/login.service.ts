import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {

  private isLoggedIn: boolean = false;  // This will hold the state of the user - private so that other code cannot change it 

  constructor(
    private __afAuth: AngularFireAuth,  // Inject a FireAuth for authenti
    private __router: Router            // Inject a Router for navigation services
  ) { }

  getLoggedIn() {
    return this.isLoggedIn;           // Share the state - this can be used by components to see if the user is logged in or not
  }

  createUser(username: string, password: string) {
    this.__afAuth.createUserWithEmailAndPassword(username, password)  // Create a new user in firebase using AngularFireAuth
      .then(authState => {                                            // if the promise resolves we do the then()
        console.log(authState);
        this.isLoggedIn = true;                                       // Update the state and now other components can see that the user logged in
        this.__router.navigate(['']);                                 // navigate to the empty route (list)
      })
      .catch(error => {                                               // if the promise rejects we do catch()
        console.log(error.message);
        this.__router.navigate(['signup/', error.message]);           // return to signup/ passing the error message in the URL
      })
  }

  loginUser(username: string, password: string) {
    this.__afAuth.signInWithEmailAndPassword(username, password)      // Log the user in against the user store in firebase
      .then(authState => {
        console.log(authState);
        this.isLoggedIn = true;                                       // Update the state and now other components can see that the user logged in
        this.__router.navigate(['']);
      })
      .catch(error => {
        console.log(error.message);
        this.__router.navigate(['login/', error.message]);            // return to signup/ passing the error message in the URL
      })
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  // This is to implement the CanActivate interface
    return this.isLoggedIn;                                                 // if the user has logged in we will be able to activate otherwise not
  }

}
