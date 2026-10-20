import type { IGraphQLContext, IGraphQLRequestFuncContext } from './graphql.interface.ts'
import { join } from 'node:path'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MilitaryGeneralInformationModule } from '../../../modules/military-generals/military-general-information/military-general-information.module.ts'
import { MilitaryGeneralsModule } from '../../../modules/military-generals/military-generals/military-generals.module.ts'
import { rootDir } from '../../../utils/metaHelper/metaHelper.ts'
import { CodegenService } from './codegen.service.ts'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(rootDir, 'graphql/schema.gql'),
      path: '/api/graphql',
      graphiql: true,
      context(ctx: IGraphQLRequestFuncContext): IGraphQLContext {
        return { ...ctx }
      },
    }),
    MilitaryGeneralsModule,
    MilitaryGeneralInformationModule,
  ],
  providers: [
    CodegenService,
  ],
})
export class GraphqlModule {}
