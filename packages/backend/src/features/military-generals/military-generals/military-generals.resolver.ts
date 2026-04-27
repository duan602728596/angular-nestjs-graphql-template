import { Resolver, Query, ResolveField, Args, Int, Parent } from '@nestjs/graphql';
import type { GraphQLScalarType } from 'graphql';
import { MilitaryGeneralItemModel, MilitaryGeneralsModel } from './military-generals.model.js';
import { MilitaryGeneralsService } from './military-generals.service.js';
import { MilitaryGeneralInformationModel } from '../military-general-information/military-general-information.model.js';
import { MilitaryGeneralInformationService } from '../military-general-information/military-general-information.service.js';

@Resolver((): typeof MilitaryGeneralItemModel => MilitaryGeneralItemModel)
export class MilitaryGeneralItemResolver {
  constructor(
    private readonly militaryGeneralInformationService: MilitaryGeneralInformationService
  ) {}

  @ResolveField((): typeof MilitaryGeneralInformationModel => MilitaryGeneralInformationModel, {
    name: 'militaryGeneralInformation',
    nullable: true,
    description: '武将的攻击力和防御力信息'
  })
  getMilitaryGeneralInformationByParent(
    @Parent() parent: MilitaryGeneralItemModel
  ): MilitaryGeneralInformationModel | null {
    return this.militaryGeneralInformationService.getMilitaryGeneralInformation(parent.id);
  }
}

@Resolver((): typeof MilitaryGeneralsModel => MilitaryGeneralsModel)
export class MilitaryGeneralsResolver {
  constructor(
    private readonly militaryGeneralsService: MilitaryGeneralsService
  ) {}

  @Query((): typeof MilitaryGeneralsModel => MilitaryGeneralsModel, { description: '武将基本信息' })
  militaryGenerals(): {} {
    return {};
  }

  @ResolveField((): Array<typeof MilitaryGeneralItemModel> => [MilitaryGeneralItemModel], {
    name: 'list',
    description: '武将列表'
  })
  getList(): Array<MilitaryGeneralItemModel> {
    return this.militaryGeneralsService.getMilitaryGeneralsList();
  }

  @ResolveField((): typeof MilitaryGeneralItemModel => MilitaryGeneralItemModel, {
    name: 'one',
    nullable: true,
    description: '查询单个武将信息'
  })
  queryOne(
    @Args('id', { type: (): GraphQLScalarType<number> => Int }) id: number
  ): MilitaryGeneralItemModel | null {
    return this.militaryGeneralsService.getMilitaryGeneralOneById(id);
  }
}