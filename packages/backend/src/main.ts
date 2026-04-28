import { NestFactory } from '@nestjs/core';
import type { INestApplication } from '@nestjs/common';
import compression from 'compression';
import { AppModule } from './app.module.js';
import { TokenGuard } from './core/guard/token.guard.js';

export async function bootstrap(): Promise<void> {
  const app: INestApplication = await NestFactory.create(AppModule);

  app.useGlobalGuards(new TokenGuard());

  app.enableCors();
  app.use(compression({ threshold: 0 }));
  await app.listen(process.env.PORT ?? 5157);
}

bootstrap();