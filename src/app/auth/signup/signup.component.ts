import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/firestore';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  conPass: string;
  error: string;

  constructor(public auth: AngularFireAuth, private db: AngularFirestore) {}

  ngOnInit() {}

  onSignup() {
    if (this.conPass === this.password) {
      this.auth.auth.createUserWithEmailAndPassword(this.email, this.password).then(response => {
        this.db.collection('users').doc(response.user.uid).set({
          firstName: '',
          lastName: '',
          email: this.email,
          userId: response.user.uid,
          username: '',
          created: new Date(),
          phone: '',
          subscriptions: [],
          teams: []
        });
      }).catch(err => {
        this.error = err.message;
      });
    }
  }

}
