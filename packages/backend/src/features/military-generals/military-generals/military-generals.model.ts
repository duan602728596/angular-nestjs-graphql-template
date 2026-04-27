import { ObjectType, Field, Int } from '@nestjs/graphql';
import type { GraphQLScalarType } from 'graphql';
import { InfluencesEnum } from '../../../common/enum/influences.enum.js';
import { MilitaryGeneralInformationModel } from '../military-general-information/military-general-information.model.js';

@ObjectType()
export class MilitaryGeneralItemModel {
  @Field((): GraphQLScalarType<number> => Int) id!: number;

  @Field() name!: string;

  @Field((): typeof InfluencesEnum => InfluencesEnum) influence!: InfluencesEnum;

  @Field((): typeof MilitaryGeneralInformationModel => MilitaryGeneralInformationModel, { nullable: true })
    militaryGeneralInformation?: MilitaryGeneralInformationModel | null;
}

@ObjectType()
export class MilitaryGeneralsModel {
  @Field((): Array<typeof MilitaryGeneralItemModel> => [MilitaryGeneralItemModel]) list!: Array<MilitaryGeneralItemModel>;

  @Field((): typeof MilitaryGeneralItemModel => MilitaryGeneralItemModel, { nullable: true }) one!: MilitaryGeneralItemModel | null;
}