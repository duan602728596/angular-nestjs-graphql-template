import { join } from 'node:path'
import { cwd } from 'node:process'
import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AppController } from './app.controller.js'
import { AppService } from './app.service.js'
import { TokenGuard } from './core/guard/token.guard.js'
import { GraphqlModule } from './core/modules/graphql/graphql.module.js'

@Module({
  imports: [
    GraphqlModule,
    ServeStaticModule.forRoot({
      rootPath: join(cwd(), 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, TokenGuard],
})
export class AppModule {}
