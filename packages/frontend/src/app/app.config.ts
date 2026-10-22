import { registerLocaleData } from '@angular/common'
import { type ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import { provideNzNativeDateAdapter } from 'ng-zorro-antd/core/time'
import { provideNzI18n } from 'ng-zorro-antd/i18n'
import { type ILocaleItem, localeMap } from '#utils/i18n'
import { appRoutesProviders } from './app.routes'

/**
 * 创建appConfig
 * @param {string} locale
 * @return {Promise<ApplicationConfig>}
 */
export async function createAppConfig(locale: string = 'en-US'): Promise<ApplicationConfig> {
  const _locale: string = Object.hasOwn(localeMap, locale) ? locale : 'en-US'
  const { i18n, ngLocale }: ILocaleItem = await localeMap[_locale]()

  if (ngLocale) {
    registerLocaleData(ngLocale, locale)
  }

  return {
    providers: [
      provideBrowserGlobalErrorListeners(),
      provideClientHydration(),
      appRoutesProviders,
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
