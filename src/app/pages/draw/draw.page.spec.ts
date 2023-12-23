import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DrawPage } from './draw.page'

describe('DrawPage', () => {
  let component: DrawPage
  let fixture: ComponentFixture<DrawPage>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawPage]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
