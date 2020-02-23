import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertInfoPageRoutingModule } from './insert-info-routing.module';

import { InsertInfoPage } from './insert-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertInfoPageRoutingModule
  ],
  declarations: [InsertInfoPage]
})
export class InsertInfoPageModule {}
