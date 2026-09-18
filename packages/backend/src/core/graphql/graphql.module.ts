import { join } from 'node:path'
import { cwd } from 'node:process'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MilitaryGeneralInformationModule } from '../../features/military-generals/military-general-information/military-general-information.module.js'
import { MilitaryGeneralsModule } from '../../features/military-generals/military-generals/military-generals.module.js'
import { CodegenService } from './codegen.service.js'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(cwd(), 'graphql/schema.gql'),
      path: '/api/graphql',
      graphiql: true,
    }),
    MilitaryGeneralsModule,
    MilitaryGeneralInformationModule,
  ],
  providers: [
    CodegenService,
  ],
})
export class GraphqlModule {}
