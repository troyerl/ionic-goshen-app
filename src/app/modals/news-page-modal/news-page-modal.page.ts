import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-news-page-modal',
  templateUrl: './news-page-modal.page.html',
  styleUrls: ['./news-page-modal.page.scss'],
})
export class NewsPageModalPage implements OnInit {
  @Input() data: {};

  constructor(public modalController: ModalController) {
  }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
