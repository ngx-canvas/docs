import { data } from '../assets/data';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { OnInit, Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet, NavigationEnd } from '@angular/router';

/* --- MATERIAL --- */
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    RouterOutlet,
    ClipboardModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  constructor(private title: Title, private router: Router) { }

  public folders: Folder[] = []

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const moduleId = <string>event.urlAfterRedirects.split('/').filter(o => o.length > 0).at(0)
        this.folders = <any>data.find((o) => o.project === moduleId)?.folders
        this.folders = this.folders.map((o) => {
          o.items = o.items.map(i => {
            i.route = ['', moduleId, o.name, i.title].map(o => o.toLowerCase()).join('/')
            return i
          })
          o.route = ['', moduleId, o.name].map((o) => o.toLowerCase()).join('/')
          return o
        })
        this.title.setTitle(`NGXCANVAS | ${moduleId.toUpperCase()} DOCS`)
      }
    })
  }

}

interface Folder {
  name: string
  route: string
  items: any[]
  subfolder: boolean
  description: string
}
