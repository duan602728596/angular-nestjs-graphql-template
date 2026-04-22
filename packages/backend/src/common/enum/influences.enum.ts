import { registerEnumType } from '@nestjs/graphql';
import { InfluencesEnum } from '@angular-nestjs-graphql-template/shared/enum/influences.enum.js';

registerEnumType(InfluencesEnum, {
  name: 'InfluencesEnum'
});

export { InfluencesEnum };