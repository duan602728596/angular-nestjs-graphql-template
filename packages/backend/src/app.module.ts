import { cwd } from 'node:process';
import { join } from 'node:path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { GraphqlModule } from './core/graphql/graphql.module.js';

@Module({
  imports: [
    GraphqlModule,
    ServeStaticModule.forRoot({
      rootPath: join(cwd(), 'public')
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}