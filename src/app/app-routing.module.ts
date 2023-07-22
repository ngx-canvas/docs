import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: 'core',
    loadChildren: () => import('./pages/core/core.module').then(m => m.CorePageModule)
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
