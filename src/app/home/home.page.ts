import { Component, OnInit } from '@angular/core';

import { Event } from '../models/event.model';
import { Alert } from '../models/alert.model';

import { ModalController } from '@ionic/angular';
import { NewsModalPage } from '../modals/news-modal/news-modal.page';
import {EventModalPage} from '../modals/event-modal/event-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  events = [
    new Event('Event', '(H) Bethany', '08/03/19', '1216 S Indiana Ave, Goshen, IN 46526', '4:30 PM', '6:30 PM'),
    new Event('Event', '(A) West Noble', '01/04/20', '5112 Lincolnway S, Ligonier, IN 46767', '4:30 PM', '6:30 PM')
  ];
  alerts = [
    new Alert('Announcement', 'Practiced Cancelled', '12/18/19', 'Practice has been cancelled due to weather. Hope you all have a nice day off and get some rest, it\'s going to be a hard practice tomorrow.'),
    new Alert('Announcement', 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW', '12/18/19', 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW'),
  ];

  constructor(public modalController: ModalController) { }

  async presentModal(news: boolean, data: {}) {
    if (news) {
      const modal = await this.modalController.create({
        component: NewsModalPage,
        componentProps: {
          data
        }
      });
      return await modal.present();
    } else {
      const modal = await this.modalController.create({
        component: EventModalPage,
        componentProps: {
          data
        }
      });
      return await modal.present();
    }
  }

  ngOnInit() {
  }

}
