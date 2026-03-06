import { join } from 'node:path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MilitaryGeneralsModule } from '../military-generals/military-generals.module.js';
import { CodegenService } from './codegen.service.js';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'graphql/schema.gql'),
      path: '/api/graphql',
      graphiql: true
    }),
    MilitaryGeneralsModule
  ],
  providers: [CodegenService]
})
export class GraphqlModule {}