import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnInit {
  @Input() data: {type: string, title: string, date: string, address: string, message: string};
  constructor() { }

  ngOnInit() {
  }

}
