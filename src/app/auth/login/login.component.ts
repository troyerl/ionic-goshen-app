import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  error: string;

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {

  }

  onLogin(username: string, password: string) {
    const user = {
      username,
      password
    };

    Auth.signIn(user).then(response => {
      this.storage.set('goshen-id', response.attributes.sub);
      this.router.navigate(['Home']);
    })
        .catch(err => this.error = err.message);
  }

}
