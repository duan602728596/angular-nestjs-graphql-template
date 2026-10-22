import { type ApplicationConfig, mergeApplicationConfig } from '@angular/core'
import { provideServerRendering, withRoutes } from '@angular/ssr'
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
 * @return {Promise<ApplicationConfig>}
 */
export async function createServerAppConfig(locale: string = 'en-US'): Promise<ApplicationConfig> {
  const appConfig: ApplicationConfig = await createAppConfig(locale)
  return mergeApplicationConfig(appConfig, serverConfig)
}
