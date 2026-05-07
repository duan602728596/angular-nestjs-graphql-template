import type { INestApplication } from '@nestjs/common';
import type { CorsOptions } from 'cors';

const whitelist: Array<RegExp> = [
  /^localhost|127(\.0){2}\.1$/i
];

/* 判断requestOrigin是否允许cors放行 */
function originCallback(
  requestOrigin: string | undefined,
  callback: (err: Error | null, origin?: boolean | string | RegExp | Array<boolean | string | RegExp>) => void
): void {
  if (!requestOrigin) {
    return callback(null, false);
  }

  const url: URL = new URL(requestOrigin);

  return callback(null, whitelist.some((reg: RegExp): boolean => reg.test(url.hostname)));
}

/* 开启cors */
export function cors(app: INestApplication): void {
  app.enableCors({
    origin: originCallback,
    methods: ['POST'],
    credentials: true
  } satisfies CorsOptions);
}