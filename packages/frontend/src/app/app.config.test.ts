import { APP_BASE_HREF } from '@angular/common'
import { type ApplicationConfig, inject, provideAppInitializer } from '@angular/core'
import { type InterpolatableTranslationObject, provideTranslateLoader, provideTranslateService, TranslateService } from '@ngx-translate/core'
import { firstValueFrom } from 'rxjs'
import { localeMap } from '#utils/i18n'
import { I18nTranslateLoader } from '#utils/i18n/I18nLoader'
import { appRoutesProviders } from './app.routes'

/**
 * 测试用的appConfig
 * @param locale
 * @param baseHref
 */
export function createTestAppConfig(locale: string = 'en-US', baseHref: string | undefined = undefined): ApplicationConfig {
  const _locale: string = Object.hasOwn(localeMap, locale) ? locale : 'en-US'

  return {
    providers: [
      // 路由
      appRoutesProviders,
      baseHref ? {
        provide: APP_BASE_HREF,
        useValue: baseHref,
      } : [],

      provideTranslateService({
        loader: provideTranslateLoader(I18nTranslateLoader),
        lang: _locale,
      }),
      provideAppInitializer((): Promise<InterpolatableTranslationObject> => {
        const translate: TranslateService = inject<TranslateService>(TranslateService)
        return firstValueFrom(translate.use(locale))
      }),
    ],
  }
}
