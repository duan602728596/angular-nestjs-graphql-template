import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { createTestAppConfig } from '../app.config.test'
import { NumberCounting } from './number-counting'

describe('numberCounting', (): void => {
  let component: NumberCounting
  let fixture: ComponentFixture<NumberCounting>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [NumberCounting],
      providers: createTestAppConfig().providers,
    }).compileComponents()

    fixture = TestBed.createComponent(NumberCounting)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})
