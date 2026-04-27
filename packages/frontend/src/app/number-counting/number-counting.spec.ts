import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { testProvideRoutes } from '../../utils/testMock';
import { NumberCounting } from './number-counting';

describe('NumberCounting', (): void => {
  let component: NumberCounting;
  let fixture: ComponentFixture<NumberCounting>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [NumberCounting],
      providers: [testProvideRoutes]
    }).compileComponents();

    fixture = TestBed.createComponent(NumberCounting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});