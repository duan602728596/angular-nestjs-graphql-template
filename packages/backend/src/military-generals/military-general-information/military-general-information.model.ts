import { ObjectType, Field, Int } from '@nestjs/graphql';
import type { GraphQLScalarType } from 'graphql';

@ObjectType()
export class MilitaryGeneralInformationModel {
  @Field((): GraphQLScalarType<number> => Int) id!: number;

  @Field((): GraphQLScalarType<number> => Int) attack!: number;

  @Field((): GraphQLScalarType<number> => Int) defense!: number;
}