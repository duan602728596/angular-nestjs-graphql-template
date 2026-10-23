import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { createTestAppConfig } from '../app.config.test'
import { Home } from './home'

describe('home', (): void => {
  let component: Home
  let fixture: ComponentFixture<Home>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: createTestAppConfig().providers,
    }).compileComponents()

    fixture = TestBed.createComponent(Home)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})
