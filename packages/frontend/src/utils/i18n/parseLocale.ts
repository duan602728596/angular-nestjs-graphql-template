import { supportedLocales, supportedLowerCaseLocales } from './index'

export interface IParseLocaleReturnType {
  /** 实际的语言 */
  locale: string
  /** 原始的取值，用于设置baseHref */
  rawLocale: string
}

/**
 * 通用的解析函数
 * @param {string} str - 可能是 window.location.pathname 或者请求头 accept-language
 * @return {string | undefined}
 */
export function parseLocale(str: string | undefined | null): IParseLocaleReturnType | undefined {
  if (!str)
    return

  const locale: string | undefined = str.split(/[/,;]/g).filter(Boolean)[0]
  const localeLowerCase: string | undefined = locale?.toLocaleLowerCase()
  const index: number = localeLowerCase ? supportedLowerCaseLocales.findIndex((o: string): boolean => o === localeLowerCase) : -1
  return index >= 0 ? { locale: supportedLocales[index], rawLocale: locale } : undefined
}

/**
 * 根据locale生成baseHref
 * @param locale
 */
export function getLocaleBaseHref(locale: string | undefined): string | undefined {
  return locale ? `/${locale}` : undefined
}
