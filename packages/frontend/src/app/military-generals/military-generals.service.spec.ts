import { TestBed } from '@angular/core/testing';
import { MilitaryGeneralsService } from './military-generals.service';

describe('MilitaryGeneralsService', (): void => {
  let service: MilitaryGeneralsService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [MilitaryGeneralsService]
    });
    service = TestBed.inject(MilitaryGeneralsService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});