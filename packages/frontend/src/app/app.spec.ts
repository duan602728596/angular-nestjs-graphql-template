import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { App } from './app'

describe('app', (): void => {
  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents()
  })

  it('should create the app', (): void => {
    const fixture: ComponentFixture<App> = TestBed.createComponent(App)
    const app: App = fixture.componentInstance

    expect(app).toBeTruthy()
  })

  it('should render button', async (): Promise<void> => {
    const fixture: ComponentFixture<App> = TestBed.createComponent(App)

    await fixture.whenStable()

    const compiled: HTMLElement = fixture.nativeElement as HTMLElement
    const routerOutlet: HTMLElement | null = compiled.querySelector('router-outlet')
    expect(routerOutlet).not.toBeNull()
  })
})
