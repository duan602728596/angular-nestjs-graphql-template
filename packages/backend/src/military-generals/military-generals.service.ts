import { Injectable } from '@nestjs/common';
import { militaryGeneralsMockData } from './military-generals.mock.js';
import type { MilitaryGeneralItemModel } from './military-generals.model.js';

@Injectable()
export class MilitaryGeneralsService {
  getMilitaryGeneralsList(): Array<MilitaryGeneralItemModel> {
    return militaryGeneralsMockData;
  }

  getMilitaryGeneralOneById(id: number): MilitaryGeneralItemModel | null {
    return militaryGeneralsMockData.find((o: MilitaryGeneralItemModel): boolean => o.id === id) ?? null;
  }
}
