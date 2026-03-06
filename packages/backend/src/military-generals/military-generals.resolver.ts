import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import type { GraphQLScalarType } from 'graphql';
import { MilitaryGeneralItem } from './military-generals.model.js';
import { MilitaryGeneralsService } from './military-generals.service.js';

@Resolver()
export class MilitaryGeneralsResolver {
  constructor(private readonly militaryGeneralsService: MilitaryGeneralsService) {}

  @Query((): Array<typeof MilitaryGeneralItem> => [MilitaryGeneralItem])
  militaryGenerals(): Array<MilitaryGeneralItem> {
    return this.militaryGeneralsService.getMilitaryGeneralsList();
  }

  @Query((): typeof MilitaryGeneralItem => MilitaryGeneralItem, { nullable: true })
  militaryGeneral(
    @Args('id', { type: (): GraphQLScalarType<number> => Int }) id: number
  ): MilitaryGeneralItem | null {
    return this.militaryGeneralsService.getMilitaryGeneralOneById(id);
  }
}