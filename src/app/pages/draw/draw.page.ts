import { Title } from '@angular/platform-browser'
import { Clipboard } from '@angular/cdk/clipboard'
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router'
import { Component, AfterViewInit } from '@angular/core'

@Component({
  selector: 'draw-page',
  styleUrls: ['./draw.page.scss'],
  templateUrl: './draw.page.html'
})

export class DrawPage implements AfterViewInit {
  constructor(private readonly http: HttpClient, private readonly title: Title, private readonly route: ActivatedRoute, private router: Router, public clipboard: Clipboard) { }

  public folders: FOLDER[] = []

  private load(done: Function) {
    this.http.get('./assets/data.json').subscribe((data: any) => {
      this.folders = data.filter((o: any) => o.project === 'draw')[0].folders
      this.folders.forEach(folder => {
        folder.id = `draw-${folder.name.toLowerCase().split(' ').join('-')}`
        folder.route = `/draw/${folder.name.toLowerCase().split(' ').join('-')}`
        folder.items.forEach(item => {
          item.id = `draw-${folder.name.toLowerCase().split(' ').join('-')}-${item.title.toLowerCase().split(' ').join('-')}`
          item.route = `/draw/${folder.name.toLowerCase().split(' ').join('-')}/${item.title.toLowerCase().split(' ').join('-')}`
        })
      })
      done()
    })
  }

  ngAfterViewInit(): void {
    document.addEventListener('click', (event: any) => {
      if (event.target?.tagName === 'A') {
        if (event.target.href.includes('unsafe:ng://')) {
          event.preventDefault()
          this.router.navigate([event.target.href.replace('unsafe:ng://', '/')])
        }
      }
    }, false)

    this.title.setTitle('NGXCANVAS | DRAW DOCS')

    this.route.params.subscribe((params: any) => {
      const id = ['draw']
      if (params.section) id.push(params.section)
      if (params.subsection) id.push(params.subsection)
      const element = document.getElementById(id.join('-'))
      if (element != null) element.scrollIntoView({ behavior: 'smooth' })
    })

    this.load(() => {
      setTimeout(() => {
        const params: any = this.route.snapshot.params
        const id = ['draw']
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
