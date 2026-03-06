import { ObjectType, Field, Int } from '@nestjs/graphql';
import type { GraphQLScalarType } from 'graphql';
import { InfluencesEnum } from '../enum/influences.enum/index.js';

@ObjectType()
export class MilitaryGeneralItem {
  @Field((): GraphQLScalarType<number> => Int) id: number;

  @Field() name: string;

  @Field((): typeof InfluencesEnum => InfluencesEnum) influence: InfluencesEnum;
}