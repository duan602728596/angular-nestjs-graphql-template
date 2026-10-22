import type { II18nMessages } from './index'
import { loadTranslations } from '@angular/localize'

type TI18nMessageModule = Promise<{ default: II18nMessages }>

const i18nMap: Record<string, () => TI18nMessageModule> = {
  'en-US': (): TI18nMessageModule => import('../../../locales/i18n/en-US/messages.json', { with: { type: 'json' } }),
  'zh-CN': (): TI18nMessageModule => import('../../../locales/i18n/zh-CN/messages.json', { with: { type: 'json' } }),
}

/**
 * SSR环境加载i18n
 * @param {string} locale
 * @return {Promise<string>}
 */
export async function loadSSRI18n(locale: string): Promise<string> {
  const messages: II18nMessages = (await i18nMap[locale]()).default
  loadTranslations(messages.translations)
  return locale
}
