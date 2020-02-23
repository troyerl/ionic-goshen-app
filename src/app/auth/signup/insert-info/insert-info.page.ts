import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-insert-info',
  templateUrl: './insert-info.page.html',
  styleUrls: ['./insert-info.page.scss'],
})
export class InsertInfoPage implements OnInit {
  teams: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.teams = db.collection('teams').valueChanges();
  }

  ngOnInit() {
  }

}
