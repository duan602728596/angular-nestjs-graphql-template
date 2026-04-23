import { InfluencesEnum } from '../../common/enum/influences.enum.js';
import type { MilitaryGeneralItemModel } from './military-generals.model.js';

export const militaryGeneralsMockData: Array<MilitaryGeneralItemModel> = [
  { id: 1, name: '刘备', influence: InfluencesEnum.Shu },
  { id: 2, name: '关羽', influence: InfluencesEnum.Shu },
  { id: 3, name: '张飞', influence: InfluencesEnum.Shu },
  { id: 4, name: '曹操', influence: InfluencesEnum.Wei },
  { id: 5, name: '孙权', influence: InfluencesEnum.Wu }
];