import { type ApplicationConfig, mergeApplicationConfig } from '@angular/core'
import { provideServerRendering, withRoutes } from '@angular/ssr'
import { loadSSRI18n } from '#utils/i18n/ssr'
import { createAppConfig } from './app.config'
import { serverRoutes } from './app.routes.server'

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
  ],
}

/**
 * 创建SSR的appConfig
 * @param {string} locale
 * @param {string} baseHref
 * @return {Promise<ApplicationConfig>}
 */
export async function createServerAppConfig(locale: string = 'en-US', baseHref: string | undefined): Promise<ApplicationConfig> {
  await loadSSRI18n(locale)
  const appConfig: ApplicationConfig = await createAppConfig(locale, baseHref)
  return mergeApplicationConfig(appConfig, serverConfig)
}
