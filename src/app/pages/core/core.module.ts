/* --- PAGES --- */
import { CorePage } from './core.page'

/* --- MODULES --- */
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { ClipboardModule } from '@angular/cdk/clipboard'
import { MatRippleModule } from '@angular/material/core'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: CorePage
  // },
  // {
  //   path: ':section',
  //   component: CorePage
  // },
  // {
  //   path: ':section/:subsection',
  //   component: CorePage
  // },
  // {
  //   path: '**',
  //   redirectTo: ''
  }
]

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    ClipboardModule,
    MatRippleModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CorePage
  ]
})

export class CorePageModule { }
