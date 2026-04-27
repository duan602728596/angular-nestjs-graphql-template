import { registerEnumType } from '@nestjs/graphql';
import { InfluencesEnum } from '@angular-nestjs-graphql-template/shared/enum/influences.enum.js';

registerEnumType(InfluencesEnum, {
  name: 'InfluencesEnum',
  description: '三国势力',
  valuesMap: {
    Wei: {
      description: '魏国'
    },
    Shu: {
      description: '蜀国'
    },
    Wu: {
      description: '吴国'
    }
  }
});

export { InfluencesEnum };