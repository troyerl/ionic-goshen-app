import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-event-modal',
    templateUrl: './event-modal.page.html',
    styleUrls: ['./event-modal.page.scss'],
})
export class EventModalPage implements OnInit {
    @Input() data: {};

    constructor(public modalController: ModalController) {
    }

    ngOnInit() {
        console.log(this.data);
    }

    async closeModal() {
        await this.modalController.dismiss();
    }

    openMap() {
        if ((navigator.platform.indexOf('iPhone') !== -1) ||
            (navigator.platform.indexOf('iPad') !== -1) ||
            (navigator.platform.indexOf('iPod') !== -1)) {
            window.open('maps://maps.google.com/maps?daddr=' + this.data.address);
        } else {
            window.open('https://maps.google.com/maps?daddr=' + this.data.address);
        }
    }

}
