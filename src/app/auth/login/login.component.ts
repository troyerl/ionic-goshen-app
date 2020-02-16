import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor() { }

  ngOnInit() {

  }

  onLogin(username: string, password: string) {
    const user = {
      username,
      password
    };

    Auth.signIn(user).then(response => {
      console.log(response);
    })
        .catch(err => console.log(err));
  }

}
