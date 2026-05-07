import { NestFactory } from '@nestjs/core';
import type { INestApplication } from '@nestjs/common';
import compression from 'compression';
import { AppModule } from './app.module.js';
import { TokenGuard } from './core/guard/token.guard.js';
import { cors } from './core/cors/cors.js';

export async function bootstrap(): Promise<void> {
  const app: INestApplication = await NestFactory.create(AppModule);

  // 全局token验证
  app.useGlobalGuards(new TokenGuard());

  // 跨域
  cors(app);

  // 压缩
  app.use(compression({ threshold: 0 }));

  await app.listen(process.env.PORT ?? 5157);
}

bootstrap();