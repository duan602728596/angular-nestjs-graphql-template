import { NestFactory } from '@nestjs/core';
import type { INestApplicationContext } from '@nestjs/common';
import { GraphqlModule } from '../../graphql/graphql.module.js';

/* 可执行文件：用来创建gql文件 */
async function generate(): Promise<void> {
  const app: INestApplicationContext = await NestFactory.createApplicationContext(GraphqlModule);

  await app.init();
  await app.close();
}

generate();