import { APP_BASE_HREF, registerLocaleData } from '@angular/common'
import { type ApplicationConfig, inject, LOCALE_ID, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import { type InterpolatableTranslationObject, provideTranslateLoader, provideTranslateService, TranslateService } from '@ngx-translate/core'
import { provideNzNativeDateAdapter } from 'ng-zorro-antd/core/time'
import { provideNzI18n } from 'ng-zorro-antd/i18n'
import { firstValueFrom } from 'rxjs'
import { type ILocaleItem, localeMap } from '#utils/i18n'
import { I18nTranslateLoader } from '#utils/i18n/I18nLoader'
import { appRoutesProviders } from './app.routes'

/**
 * 创建appConfig
 * @param {string} locale
 * @param {string} baseHref
 * @return {Promise<ApplicationConfig>}
 */
export async function createAppConfig(locale: string = 'en-US', baseHref: string | undefined = undefined): Promise<ApplicationConfig> {
  const _locale: string = Object.hasOwn(localeMap, locale) ? locale : 'en-US'
  const { i18n, ngLocale }: ILocaleItem = await localeMap[_locale]()

  if (ngLocale) {
    registerLocaleData(ngLocale, locale)
  }

  return {
    providers: [
      provideBrowserGlobalErrorListeners(),
      provideClientHydration(),

      // 路由
      appRoutesProviders,
      baseHref ? {
        provide: APP_BASE_HREF,
        useValue: baseHref,
      } : [],

      // i18n
      provideTranslateService({
        loader: provideTranslateLoader(I18nTranslateLoader),
        lang: _locale,
      }),
      provideAppInitializer((): Promise<InterpolatableTranslationObject> => {
        const translate: TranslateService = inject<TranslateService>(TranslateService)
        return firstValueFrom(translate.use(locale))
      }),

      // antd i18n
      provideNzI18n(i18n),
      provideNzNativeDateAdapter({
        locale: _locale,
        firstDayOfWeek: 0,
      }),
      ngLocale ? {
        provide: LOCALE_ID,
        useValue: _locale,
      } : [],
    ],
  }
}
