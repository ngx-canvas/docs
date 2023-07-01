import { Title } from '@angular/platform-browser'
import { Clipboard } from '@angular/cdk/clipboard'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router'
import { Component, AfterViewInit } from '@angular/core'

@Component({
  selector: 'core-page',
  styleUrls: ['./core.page.scss'],
  templateUrl: './core.page.html'
})

export class CorePage implements AfterViewInit {
  constructor (private readonly http: HttpClient, private readonly title: Title, private readonly route: ActivatedRoute, public clipboard: Clipboard) {}

  public folders: FOLDER[] = []

  private load (done: Function) {
    this.http.get('./assets/data.json').subscribe((data: any) => {
      this.folders = data.filter((o: any) => o.project === 'core')[0].folders
      this.folders.forEach(folder => {
        folder.id = `core-${folder.name.toLowerCase().split(' ').join('-')}`
        folder.route = `/core/${folder.name.toLowerCase().split(' ').join('-')}`
        folder.items.forEach(item => {
          item.id = `core-${folder.name.toLowerCase().split(' ').join('-')}-${item.title.toLowerCase().split(' ').join('-')}`
          item.route = `/core/${folder.name.toLowerCase().split(' ').join('-')}/${item.title.toLowerCase().split(' ').join('-')}`
        })
      })
      done()
    })
  }

  ngAfterViewInit (): void {
    this.title.setTitle('NGXCANVAS | CORE DOCS')

    this.route.params.subscribe((params: any) => {
      const id = ['core']
      if (params.section) id.push(params.section)
      if (params.subsection) id.push(params.subsection)
      const element = document.getElementById(id.join('-'))
      if (element != null) element.scrollIntoView({ behavior: 'smooth' })
    })

    this.load(() => {
      setTimeout(() => {
        const params: any = this.route.snapshot.params
        const id = ['core']
        if (params.section) id.push(params.section)
        if (params.subsection) id.push(params.subsection)
        const element = document.getElementById(id.join('-'))
        if (element != null) element.scrollIntoView({ behavior: 'smooth' })
      }, 200)
    })
  }
}

interface FOLDER {
  id: string
  name: string
  route: string
  items: any[]
}
