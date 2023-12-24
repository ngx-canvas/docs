import { data } from '../../assets/data';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { OnInit, Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  imports: [MatIconModule, ClipboardModule, MatButtonModule],
  selector: 'app-content',
  styleUrl: './content.component.scss',
  standalone: true,
  templateUrl: './content.component.html'
})

export class ContentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public folders: Folder[] = []

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.folders = <any>data.find((o) => o.project === params.module)?.folders
      this.folders = this.folders.map((o) => {
        o.items = o.items.map(i => {
          i.route = ['', params.module, o.name, i.title].map(o => o.toLowerCase()).join('/')
          return i
        })
        o.route = ['', params.module, o.name].map((o) => o.toLowerCase()).join('/')
        return o
      })
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

