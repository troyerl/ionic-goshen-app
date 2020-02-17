import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import { Auth } from 'aws-amplify';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-confirm-email-modal',
  templateUrl: './confirm-email-modal.component.html',
  styleUrls: ['./confirm-email-modal.component.scss'],
})
export class ConfirmEmailModalComponent implements OnInit {
  verifycode: string;

  @Input() username: string;
  @Input() sub: string;

  constructor(
      public modalController: ModalController,
      private router: Router,
      private storage: Storage
  ) {}

  ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss();
  }

  onSubmit() {
    Auth.confirmSignUp(this.username, this.verifycode,
        {forceAliasCreation: true}).then(data => {
          this.storage.set('id', this.sub);
          this.router.navigate(['home']);
          this.closeModal();
    })
        .catch(err => console.log(err));
  }

}
