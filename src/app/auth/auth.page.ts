import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  login: boolean;
  constructor(private modalControl: ModalController) { }

  ngOnInit() {
    this.login = true;
  }

  setScreenType() {
    this.login = !this.login;
  }

}
