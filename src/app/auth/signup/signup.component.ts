import { Component, OnInit } from '@angular/core';

import { Auth } from 'aws-amplify';
import {ModalController} from '@ionic/angular';

import {ConfirmEmailModalComponent} from '../../modals/confirm-email-modal/confirm-email-modal.component';

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

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  onSignup() {
    const user = {
      username: this.username,
      password: this.password,
      attributes: {
        email: this.email
      }
    };

    if (this.conPass === this.password) {
      Auth.signUp(user)
          .then(data => {
            console.log(data);
            this.presentModal();
          })
          .catch(err => console.log(err));
    } else {
      this.error = 'Passwords do not match';
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ConfirmEmailModalComponent,
      componentProps: {
        username: this.username
      }
    });
    return await modal.present();
  }

}
