import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {HomeCardComponent} from '../cards/home-card/home-card.component';
import {NewsModalPage} from '../modals/news-modal/news-modal.page';
import {EventModalPage} from '../modals/event-modal/event-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
    declarations: [HomePage, HomeCardComponent, NewsModalPage, EventModalPage],
    entryComponents: [NewsModalPage, EventModalPage]
})
export class HomePageModule {}
