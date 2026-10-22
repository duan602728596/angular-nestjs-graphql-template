import { type ApplicationConfig, type ApplicationRef, REQUEST } from '@angular/core'
import { bootstrapApplication, type BootstrapContext } from '@angular/platform-browser'
import { getLocaleBaseHref, type IParseLocaleReturnType, parseLocale } from '#utils/i18n'
import { App } from './app/app'
import { createServerAppConfig } from './app/app.config.server'

async function bootstrap(context: BootstrapContext): Promise<ApplicationRef> {
  // 从请求头中获取默认语言
  const request: Request | null = context.platformRef.injector.get(REQUEST, null)
  const url: string | undefined = request?.url
  const pathname: string | undefined = url ? new URL(url).pathname : undefined
  const locale: IParseLocaleReturnType | undefined = parseLocale(pathname)
  const serverAppConfig: ApplicationConfig = await createServerAppConfig(locale?.locale, getLocaleBaseHref(locale?.rawLocale))
  return bootstrapApplication(App, serverAppConfig, context)
}

export default bootstrap
