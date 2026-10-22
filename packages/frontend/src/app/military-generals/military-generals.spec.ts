import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { appRoutesProviders } from '../app.routes'
import { MilitaryGenerals } from './military-generals'

describe('militaryGenerals', (): void => {
  let component: MilitaryGenerals
  let fixture: ComponentFixture<MilitaryGenerals>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [MilitaryGenerals],
      providers: [appRoutesProviders],
    }).compileComponents()

    fixture = TestBed.createComponent(MilitaryGenerals)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})
