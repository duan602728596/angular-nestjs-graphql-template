import type { NzI18nInterface } from 'ng-zorro-antd/i18n'

export interface II18nMessages {
  locale: string
  translations: Record<string, string>
}

export interface ILocaleItem {
  i18n: NzI18nInterface
  ngLocale?: any
}

/** 所有locale文件 */
export const localeMap: Record<string, () => Promise<ILocaleItem>> = {
  'en-US': async (): Promise<ILocaleItem> => {
    const { en_US } = await import('ng-zorro-antd/i18n')
    return { i18n: en_US }
  },

  'zh-CN': async (): Promise<ILocaleItem> => {
    const [{ zh_CN }, { default: ngLocale }] = await Promise.all([
      import('ng-zorro-antd/i18n'),
      import('@angular/common/locales/zh'),
    ])
    return { i18n: zh_CN, ngLocale }
  },
}

/** 支持的语言 */
export const supportedLocales: Array<string> = ['en-US', 'zh-CN']
export const supportedLowerCaseLocales: Array<string> = supportedLocales.map((o: string): string => o.toLocaleLowerCase())

export { getLocaleBaseHref, type IParseLocaleReturnType, parseLocale } from './parseLocale'
