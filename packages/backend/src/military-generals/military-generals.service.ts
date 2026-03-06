import { Injectable } from '@nestjs/common';
import { militaryGeneralsMockData } from './military-generals.mock.js';
import type { MilitaryGeneralItem } from './military-generals.model.js';

@Injectable()
export class MilitaryGeneralsService {
  getMilitaryGeneralsList(): Array<MilitaryGeneralItem> {
    return militaryGeneralsMockData;
  }

  getMilitaryGeneralOneById(id: number): MilitaryGeneralItem | null {
    return militaryGeneralsMockData.find((o: MilitaryGeneralItem): boolean => o.id === id) ?? null;
  }
}
