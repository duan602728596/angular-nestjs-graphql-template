import { ObjectType, Field, Int } from '@nestjs/graphql';
import type { GraphQLScalarType } from 'graphql';
import { InfluencesEnum } from '../enum/influences.enum/index.js';

@ObjectType()
export class MilitaryGeneralItemModel {
  @Field((): GraphQLScalarType<number> => Int) id!: number;

  @Field() name!: string;

  @Field((): typeof InfluencesEnum => InfluencesEnum) influence!: InfluencesEnum;
}

@ObjectType()
export class MilitaryGeneralsModel {
  @Field((): Array<typeof MilitaryGeneralItemModel> => [MilitaryGeneralItemModel]) list!: Array<MilitaryGeneralItemModel>;

  @Field((): typeof MilitaryGeneralItemModel => MilitaryGeneralItemModel, { nullable: true }) one!: MilitaryGeneralItemModel | null;
}