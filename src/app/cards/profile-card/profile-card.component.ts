import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  user: {name: 'Logan Troyer', email: 'troyerlogan@gmail.com', phone: '574-312-1102', username: 'troyerl'};
  constructor() { }

  ngOnInit() {}

}
