import { Component, HostBinding, HostListener } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error: any;
  user: Observable<firebase.User>;

  constructor(public af: AngularFireAuth, private router: Router) {

    this.user = this.af.authState;
//    this.user.subscribe(auth => {
//      if (auth) {
//        this.router.navigateByUrl('/home');
//      }
//    });

  }

  loginWithGoogle() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
      .then((success) => {
        this.router.navigate(['/home']);
      }).catch((err) => {
        this.error = err;
      });
  }
}
