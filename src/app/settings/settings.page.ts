import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  n = 4;
  constructor(private router: Router, private storage: Storage) {
    this.storage.get('goshen-id').then(item => {
      if (!item) {
        this.router.navigate(['auth']);
      }
    });
  }

  ngOnInit() {
  }

}
