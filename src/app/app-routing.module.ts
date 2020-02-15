import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'news-modal',
    loadChildren: () => import('./modals/news-modal/news-modal.module').then( m => m.NewsModalPageModule)
  },
  {
    path: 'event-modal',
    loadChildren: () => import('./modals/event-modal/event-modal.module').then( m => m.EventModalPageModule)
  },
  {
    path: 'news-page-modal',
    loadChildren: () => import('./modals/news-page-modal/news-page-modal.module').then( m => m.NewsPageModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
