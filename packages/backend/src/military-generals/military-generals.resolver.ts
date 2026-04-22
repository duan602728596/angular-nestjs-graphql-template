import { Resolver, Query, ResolveField, Args, Int } from '@nestjs/graphql';
import type { GraphQLScalarType } from 'graphql';
import { MilitaryGeneralItemModel, MilitaryGeneralsModel } from './military-generals.model.js';
import { MilitaryGeneralsService } from './military-generals.service.js';

@Resolver((): typeof MilitaryGeneralsModel => MilitaryGeneralsModel)
export class MilitaryGeneralsResolver {
  constructor(private readonly militaryGeneralsService: MilitaryGeneralsService) {}

  @Query((): typeof MilitaryGeneralsModel => MilitaryGeneralsModel)
  militaryGenerals(): {} {
    return {};
  }

  @ResolveField((): Array<typeof MilitaryGeneralItemModel> => [MilitaryGeneralItemModel])
  list(): Array<MilitaryGeneralItemModel> {
    return this.militaryGeneralsService.getMilitaryGeneralsList();
  }

  @ResolveField((): typeof MilitaryGeneralItemModel => MilitaryGeneralItemModel, { nullable: true })
  one(
    @Args('id', { type: (): GraphQLScalarType<number> => Int }) id: number
  ): MilitaryGeneralItemModel | null {
    return this.militaryGeneralsService.getMilitaryGeneralOneById(id);
  }
}