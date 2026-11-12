import type { EnvironmentProviders } from '@angular/core'
import { type GuardResult, type MaybeAsync, provideRouter, type Route, type Routes, type UrlSegment } from '@angular/router'
import { supportedLowerCaseLocales } from '#utils/i18n'
import { Home } from './home/home'
import { MilitaryGenerals } from './military-generals/military-generals'
import { NumberCounting } from './number-counting/number-counting'

const baseRoutes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'military-generals', component: MilitaryGenerals },
  { path: 'number-counting', component: NumberCounting },
]

/**
 * 处理URL上的语言，判断是否匹配，规则为：
 * /xyz/      -> en-US
 * /en-US/xyz -> en-US
 * /zh-CN/xyz -> zh-CN
 * @param {Route} _route
 * @param {Array<UrlSegment>} segments
 */
function localeMatcher(_route: Route, segments: Array<UrlSegment>): MaybeAsync<GuardResult> {
  const locale: string | undefined = segments[0]?.path?.toLocaleLowerCase()
  return supportedLowerCaseLocales.includes(locale)
}

export const routes: Routes = [
  {
    path: ':locale',
    canMatch: [localeMatcher],
    children: baseRoutes,
  },
  {
    path: '',
    children: baseRoutes,
  },
]

export const appRoutesProviders: EnvironmentProviders = provideRouter(routes)
