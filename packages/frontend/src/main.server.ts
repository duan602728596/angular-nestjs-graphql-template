import { type ApplicationConfig, type ApplicationRef, REQUEST } from '@angular/core'
import { bootstrapApplication, type BootstrapContext } from '@angular/platform-browser'
import { App } from './app/app'
import { createServerAppConfig } from './app/app.config.server'

/** 解析language */
function parseLocale(locale: string | undefined | null): string {
  if (!locale)
    return 'en-US'

  const localeArray: Array<string> = locale.split(/[;,]/g)
  return localeArray[0]
}

async function bootstrap(context: BootstrapContext): Promise<ApplicationRef> {
  // 从请求头中获取语言
  const request: Request | null = context.platformRef.injector.get(REQUEST, null)
  const locale: string = parseLocale(request?.headers.get('accept-language'))

  const serverAppConfig: ApplicationConfig = await createServerAppConfig(locale)
  return bootstrapApplication(App, serverAppConfig, context)
}

export default bootstrap
