import { provideRouter } from '@angular/router';
import { routes } from '../app/app.routes';

/* 测试用routes */
export const testProvideRoutes: ReturnType<typeof provideRouter> = provideRouter(routes);