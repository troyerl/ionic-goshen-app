import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor( private router: Router, private storage: Storage) {
    this.storage.get('goshen-id').then(item => {
      if (!item) {
        this.router.navigate(['auth']);
      }
    });
  }

  ngOnInit() {
  }

}
