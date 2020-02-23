import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {LoadingController} from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  error: string;

  constructor(private router: Router, private storage: Storage, private loadingController: LoadingController, private auth: AngularFireAuth) { }

  ngOnInit() {

  }

  async onLogin(username: string, password: string) {
    this.auth.auth.signInWithEmailAndPassword(this.email, this.password).then(response => {
      this.storage.set('goshen-id', response.user.uid);
      this.router.navigate(['tabs/Home']);
    }).catch(err => {
      this.error = err.message;
    });
  }

}
