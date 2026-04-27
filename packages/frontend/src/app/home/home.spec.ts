import { TestBed, type ComponentFixture } from '@angular/core/testing';
import { testProvideRoutes } from '../../utils/testMock';
import { Home } from './home';

describe('Home', (): void => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [testProvideRoutes]
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
