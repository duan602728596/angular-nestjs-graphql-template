import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { createTestAppConfig } from '../app.config.test'
import { MilitaryGenerals } from './military-generals'

describe('militaryGenerals', (): void => {
  let component: MilitaryGenerals
  let fixture: ComponentFixture<MilitaryGenerals>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [MilitaryGenerals],
      providers: createTestAppConfig().providers,
    }).compileComponents()

    fixture = TestBed.createComponent(MilitaryGenerals)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})
