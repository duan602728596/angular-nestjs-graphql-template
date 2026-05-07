import { NestFactory } from '@nestjs/core';
import type { INestApplication } from '@nestjs/common';
import compression from 'compression';
import { AppModule } from './app.module.js';
import { TokenGuard } from './core/guard/token.guard.js';
import { cors } from './core/_cors/cors.js';

export async function bootstrap(): Promise<void> {
  const app: INestApplication = await NestFactory.create(AppModule);

  app.useGlobalGuards(new TokenGuard()); // 全局token验证
  cors(app); // 跨域
  app.use(compression({ threshold: 0 })); // 压缩
  await app.listen(process.env.PORT ?? 5157);
}

bootstrap();