import { ObjectType, Field, Int } from '@nestjs/graphql';
import type { GraphQLScalarType } from 'graphql';
import { InfluencesEnum } from '../../../common/enum/influences.enum.js';
import { MilitaryGeneralInformationModel } from '../military-general-information/military-general-information.model.js';

@ObjectType({ description: '单个武将基本信息' })
export class MilitaryGeneralItemModel {
  @Field((): GraphQLScalarType<number> => Int) id!: number;

  @Field({ description: '武将名字' }) name!: string;

  @Field((): typeof InfluencesEnum => InfluencesEnum, { description: '武将阵营' }) influence!: InfluencesEnum;

  @Field((): typeof MilitaryGeneralInformationModel => MilitaryGeneralInformationModel, {
    nullable: true,
    description: '武将的攻击力和防御力'
  }) militaryGeneralInformation?: MilitaryGeneralInformationModel | null;
}

@ObjectType({ description: '武将基本信息' })
export class MilitaryGeneralsModel {
  @Field((): Array<typeof MilitaryGeneralItemModel> => [MilitaryGeneralItemModel], {
    description: '武将列表'
  }) list!: Array<MilitaryGeneralItemModel>;

  @Field((): typeof MilitaryGeneralItemModel => MilitaryGeneralItemModel, {
    nullable: true,
    description: '武将信息查询'
  }) one!: MilitaryGeneralItemModel | null;
}