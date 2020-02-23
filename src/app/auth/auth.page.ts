import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  login: boolean;
  constructor(private modalControl: ModalController, private auth: AngularFireAuth) { }

  ngOnInit() {
    this.login = true;
  }

  setScreenType() {
    this.login = !this.login;
  }

}
