import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { testProvideRoutes } from '../../utils/testMock';
import { MilitaryGenerals } from './military-generals';

describe('MilitaryGenerals', (): void => {
  let component: MilitaryGenerals;
  let fixture: ComponentFixture<MilitaryGenerals>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [MilitaryGenerals],
      providers: [testProvideRoutes]
    }).compileComponents();

    fixture = TestBed.createComponent(MilitaryGenerals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});