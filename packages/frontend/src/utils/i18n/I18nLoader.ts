import type { II18nMessages } from './index'
import { Injectable } from '@angular/core'
import { TranslateLoader, type TranslationObject } from '@ngx-translate/core'
import { from, type Observable } from 'rxjs'

type TI18nMessageModule = Promise<{ default: II18nMessages }>

/**
 * ngx-translate加载i18n
 */
@Injectable()
export class I18nTranslateLoader implements TranslateLoader {
  i18nMap: Record<string, () => TI18nMessageModule> = {
    'en-US': (): TI18nMessageModule => import('../../../locales/i18n/en-US/messages.json', { with: { type: 'json' } }),
    'zh-CN': (): TI18nMessageModule => import('../../../locales/i18n/zh-CN/messages.json', { with: { type: 'json' } }),
  }

  getTranslation(lang: string): Observable<TranslationObject> {
    return from(
      this.i18nMap[lang]()
        .then((o: { default: II18nMessages }): TranslationObject => o.default.translations),
    )
  }
}
