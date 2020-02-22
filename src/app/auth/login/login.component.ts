import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  error: string;

  constructor(private router: Router, private storage: Storage, private loadingController: LoadingController) { }

  ngOnInit() {

  }

  async onLogin(username: string, password: string) {
    const loading = await this.loadingController.create({
      message: 'Logging in...',
    });
    await loading.present();
    const user = {
      username,
      password
    };

    Auth.signIn(user).then(response => {
      this.storage.set('goshen-id', response.attributes.sub);
      loading.dismiss();
      this.router.navigate(['/tabs/Home']);
    })
        .catch(err => {
          loading.dismiss();
          this.error = err.message;
        });
  }

}
