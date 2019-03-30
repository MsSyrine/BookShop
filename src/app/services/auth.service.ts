import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(
    private _fireAuth: AngularFireAuth, private router: Router) {
      this.user = _fireAuth.authState;
this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
            console.log(this.userDetails);
          } else {
            this.userDetails = null;
          }
        }
      );
  }


  // Register
  registerUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this._fireAuth.auth.createUserWithEmailAndPassword (email, password).then(userData => resolve(userData),
      err => reject(err));
    });
  }

// loginwithEmail
loginEmail(email: string, password: string) {
  return new Promise((resolve, reject) => {
    this._fireAuth.auth.signInWithEmailAndPassword(email, password).then(userData => resolve(userData),
    err => reject(err));
  });
}

// loginWithFB
signInWithFacebook() {
  return this._fireAuth.auth.signInWithPopup(
    new firebase.auth.FacebookAuthProvider()
  );
}

// loginWithGoogle
signInWithGoogle() {
  return this._fireAuth.auth.signInWithPopup(
    new firebase.auth.GoogleAuthProvider()
  );
}

// loginWithTwitter
signInWithTwitter() {
  return this._fireAuth.auth.signInWithPopup(
    new firebase.auth.TwitterAuthProvider()
  );
}

// Match login with data
getAuth() {
  return this._fireAuth.authState.map( auth => auth);
}


  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }
  logout() {
      this._fireAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
    }

  }




