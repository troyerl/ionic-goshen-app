import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertInfoPage } from './insert-info.page';

const routes: Routes = [
  {
    path: '',
    component: InsertInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertInfoPageRoutingModule {}
