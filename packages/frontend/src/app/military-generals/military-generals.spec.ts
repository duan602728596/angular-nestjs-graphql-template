import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { MilitaryGenerals } from './military-generals';

describe('MilitaryGenerals', (): void => {
  let component: MilitaryGenerals;
  let fixture: ComponentFixture<MilitaryGenerals>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [MilitaryGenerals]
    }).compileComponents();

    fixture = TestBed.createComponent(MilitaryGenerals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
