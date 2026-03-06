import { registerEnumType } from '@nestjs/graphql';
import { InfluencesEnum } from './influences.enum.js';

registerEnumType(InfluencesEnum, {
  name: 'InfluencesEnum'
});

export { InfluencesEnum };