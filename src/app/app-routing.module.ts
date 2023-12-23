import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: 'core',
    loadChildren: () => import('./pages/core/core.module').then(m => m.CorePageModule)
  },
  {
    path: 'draw',
    loadChildren: () => import('./pages/draw/draw.module').then(m => m.DrawPageModule)
  },
  {
    path: '**',
    redirectTo: 'core'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
