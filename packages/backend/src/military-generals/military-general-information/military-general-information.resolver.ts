import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import type { GraphQLScalarType } from 'graphql';
import { MilitaryGeneralInformationModel } from './military-general-information.model.js';
import { MilitaryGeneralInformationService } from './military-general-information.service.js';

@Resolver((): typeof MilitaryGeneralInformationModel => MilitaryGeneralInformationModel)
export class MilitaryGeneralInformationResolver {
  constructor(
    private readonly militaryGeneralInformationService: MilitaryGeneralInformationService
  ) {}

  @Query((): typeof MilitaryGeneralInformationModel => MilitaryGeneralInformationModel, { nullable: true })
  militaryGeneralInformation(
    @Args('id', { type: (): GraphQLScalarType<number> => Int }) id: number
  ): MilitaryGeneralInformationModel | null {
    return this.militaryGeneralInformationService.getMilitaryGeneralInformation(id);
  }
}