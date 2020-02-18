import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {NewsPageModalPage} from '../modals/news-page-modal/news-page-modal.page';
import {Alert} from '../models/alert.model';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
    alerts = [
        new Alert('Announcement', 'Practiced Cancelled', '12/18/19', 'Practice has been cancelled due to weather. Hope you all have a nice day off and get some rest, it\'s going to be a hard practice tomorrow.'),
        new Alert('Announcement', 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW', '12/18/19', 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW'),
    ];
  constructor(public modalController: ModalController, private storage: Storage, private router: Router) {
      this.storage.get('goshen-id').then(item => {
          if (!item) {
              this.router.navigate(['auth']);
          }
      });
  }

  ngOnInit() {
  }

  async presentModal(data: {}) {
    const modal = await this.modalController.create({
      component: NewsPageModalPage,
      componentProps: {
        data
      }
    });
    return await modal.present();
  }

}
