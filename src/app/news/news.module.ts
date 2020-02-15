import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import {AlertCardComponent} from '../cards/alert-card/alert-card.component';
import {NewsPageModalPage} from '../modals/news-page-modal/news-page-modal.page';
import {NewsPage} from './news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule
  ],
  declarations: [NewsPage, NewsPageModalPage, AlertCardComponent],
  entryComponents: [NewsPageModalPage]
})
export class NewsPageModule {}
