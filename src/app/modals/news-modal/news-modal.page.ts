import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-news-modal',
    templateUrl: './news-modal.page.html',
    styleUrls: ['./news-modal.page.scss'],
})
export class NewsModalPage implements OnInit {
    @Input() data: {};

    constructor(public modalController: ModalController) {
    }

    ngOnInit() {
        console.log(this.data);
    }

    async closeModal() {
        await this.modalController.dismiss();
    }

}
