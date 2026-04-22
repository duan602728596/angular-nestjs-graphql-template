import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCounting } from './number-counting';

describe('NumberCounting', (): void => {
  let component: NumberCounting;
  let fixture: ComponentFixture<NumberCounting>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [NumberCounting]
    }).compileComponents();

    fixture = TestBed.createComponent(NumberCounting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});