import { data } from '../assets/data';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { OnInit, Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet, ActivatedRoute } from '@angular/router';

/* --- MATERIAL --- */
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
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

  constructor(private title: Title, private route: ActivatedRoute, private router: Router) { }

  public folders: Folder[] = []

  public goto(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((event: any) => {
      this.folders = <any>data.find((o) => o.project === event.module)?.folders
      this.folders = this.folders ? this.folders.map((o) => {
        o.items = o.items.map(i => {
          i.params = {
            module: event.module.split(' ').join('-').toLowerCase(),
            section: o.name.split(' ').join('-').toLowerCase(),
            subsection: i.title.split(' ').join('-').toLowerCase()
          }
          i.id = [i.params.module, i.params.section, i.params.subsection].filter(o => o).join('-')
          i.inputs.forEach((input: any) => {
            input.type = input.type.replace('REPLACE_WITH_HOST', window.location.origin)
          })
          return i
        })
        o.params = {
          module: event.module.split(' ').join('-').toLowerCase(),
          section: o.name.split(' ').join('-').toLowerCase()
        }
        o.id = [o.params.module, o.params.section].filter(o => o).join('-')
        return o
      }) : []

      this.title.setTitle(`NGXCANVAS | ${event.module?.toUpperCase()} DOCS`)

      setTimeout(() => this.goto([event.module, event.section, event.subsection].filter(o => o).join('-')), 50)
    })
    if (window.location.search.length === 0) this.router.navigate(['/'], { queryParams: { module: data.at(0)?.project } })
  }

}

interface Folder {
  id: string
  name: string
  items: any[]
  params: any
  subfolder: boolean
  description: string
}
