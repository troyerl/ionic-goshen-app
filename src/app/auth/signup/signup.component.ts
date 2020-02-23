import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/firestore';

import { AngularFirestore } from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  conPass: string;
  error: string;

  constructor(private router: Router, private storage: Storage, public auth: AngularFireAuth, private db: AngularFirestore) {}

  ngOnInit() {}

  onSignup() {
    if (this.conPass === this.password) {
      this.auth.auth.createUserWithEmailAndPassword(this.email, this.password).then(response => {
        this.db.collection('users').doc(response.user.uid).set({
          admin: false,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          userId: response.user.uid,
          username: this.username,
          created: new Date(),
          phone: '',
          subscriptions: [],
          teams: []
        }).catch(err => {
          console.log(err.code);
        });
        this.storage.set('goshen-id', response.user.uid);
        this.router.navigate(['insert-info']);
      }).catch(err => {
        console.log(err.code);
      });
    } else {
      this.error = 'Passwords do not match';
    }
  }

}
