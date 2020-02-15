import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageModalPageRoutingModule } from './news-page-modal-routing.module';

import { NewsPageModalPage } from './news-page-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageModalPageRoutingModule
  ],
  declarations: [NewsPageModalPage]
})
export class NewsPageModalPageModule {}
