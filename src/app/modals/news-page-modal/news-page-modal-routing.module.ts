import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPageModalPage } from './news-page-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NewsPageModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageModalPageRoutingModule {}
