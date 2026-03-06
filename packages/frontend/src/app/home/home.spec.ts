import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { Home } from './home';

describe('Home', (): void => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [Home]
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
