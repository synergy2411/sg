import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private token : string = null;

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            console.log("Logged in.", token)
            this.token = token;
            this.router.navigate(["/users"]);
          }).catch(err => console.log("Token problem", err))
      }).catch(err => { console.log(err) });
  }

  register(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log("User registered.")
      }).catch(err => console.log(err))
  }

  getToken(){
    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }

  logout(){
    firebase.auth().signOut()
      .then(response => {
        this.token = null;
      }).catch(err => console.log(err));
  }

  constructor(private router : Router) { }
}
