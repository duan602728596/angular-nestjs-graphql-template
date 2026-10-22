import type { NzI18nInterface } from 'ng-zorro-antd/i18n'
import { loadTranslations } from '@angular/localize'

const i18nKey: string = 'I18N_LOCALE'

export interface II18nMessages {
  locale: string
  translations: Record<string, string>
}

export interface ILocaleItem {
  i18n: NzI18nInterface
  ngLocale?: any
}

/**
 * 获取当前语言
 * @return {string}
 */
export function getI18nLocale(): string {
  return localStorage.getItem(i18nKey) ?? 'en-US'
}

/**
 * 设置当前语言
 * @param {string} locale
 */
export function setI18nLocale(locale: string): void {
  localStorage.setItem(i18nKey, locale)
}

/**
 * 加载一个i18n文件
 * @return {Promise<string>}
 */
export async function loadI18n(): Promise<string> {
  const locale: string = getI18nLocale()
  const messages: II18nMessages = await fetch(`/i18n/${locale}/messages.json`)
    .then((res: Response): Promise<II18nMessages> => res.json())
  loadTranslations(messages.translations)
  return locale
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
