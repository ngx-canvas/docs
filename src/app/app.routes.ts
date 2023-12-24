import { Routes } from '@angular/router';

import { ContentComponent } from './content/content.component';

export const routes: Routes = [
  {
    path: ':module',
    component: ContentComponent
  },
  {
    path: ':module/:section',
    component: ContentComponent
  },
  {
    path: ':module/:section/:identifier',
    component: ContentComponent
  },
  {
    path: '**',
    redirectTo: 'core'
  }
];
