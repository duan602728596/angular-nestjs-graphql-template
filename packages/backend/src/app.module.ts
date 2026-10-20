import { join } from 'node:path'
import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AppController } from './app.controller.ts'
import { AppService } from './app.service.ts'
import { TokenGuard } from './core/guard/token/token.guard.ts'
import { GraphqlModule } from './core/modules/graphql/graphql.module.ts'
import { rootDir } from './utils/metaHelper/metaHelper.ts'

@Module({
  imports: [
    GraphqlModule,
    ServeStaticModule.forRoot({
      rootPath: join(rootDir, 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, TokenGuard],
})
export class AppModule {}
