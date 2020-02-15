import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert-card',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.scss'],
})
export class AlertCardComponent implements OnInit {
  @Input() data: {type: string, title: string, date: string, address: string, message: string};
  constructor() { }

  ngOnInit() {}

}
