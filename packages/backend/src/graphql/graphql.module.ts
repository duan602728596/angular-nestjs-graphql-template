import { join } from 'node:path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MilitaryGeneralsModule } from '../military-generals/military-generals/military-generals.module.js';
import { MilitaryGeneralInformationModule } from '../military-generals/military-general-information/military-general-information.module.js';
import { CodegenService } from './codegen.service.js';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'graphql/schema.gql'),
      path: '/api/graphql',
      graphiql: true
    }),
    MilitaryGeneralsModule,
    MilitaryGeneralInformationModule
  ],
  providers: [
    CodegenService
  ]
})
export class GraphqlModule {}