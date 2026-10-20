import { join } from 'node:path'
import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AppController } from './app.controller.ts'
import { AppService } from './app.service.ts'
import { TokenGuard } from './core/guard/token/token.guard.ts'
import { EnvModule } from './core/modules/env/env.module.ts'
import { GraphqlModule } from './core/modules/graphql/graphql.module.ts'
import { rootDir } from './utils/metaHelper/metaHelper.ts'

@Module({
  imports: [
    EnvModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(rootDir, 'public'),
    }),
    GraphqlModule,
  ],
  controllers: [AppController],
  providers: [AppService, TokenGuard],
})
export class AppModule {}
