import type { EnvironmentProviders } from '@angular/core'
import { provideRouter, type Routes, type UrlMatchResult, UrlSegment } from '@angular/router'
import { supportedLowerCaseLocales } from '#utils/i18n'
import { Home } from './home/home'
import { MilitaryGenerals } from './military-generals/military-generals'
import { NumberCounting } from './number-counting/number-counting'

/* 处理语言 */
function optionalLocaleMatcher(segments: Array<UrlSegment>): UrlMatchResult {
  const firstSegment: UrlSegment = segments[0]

  if (firstSegment && supportedLowerCaseLocales.includes(firstSegment.path.toLocaleLowerCase())) {
    return {
      consumed: [firstSegment],
      posParams: {
        locale: firstSegment,
      },
    }
  } else {
    return {
      consumed: [],
      posParams: {
        locale: new UrlSegment('en-US', {}),
      },
    }
  }
}

export const routes: Routes = [
  {
    matcher: optionalLocaleMatcher,
    children: [
      { path: '', component: Home },
      { path: 'military-generals', component: MilitaryGenerals },
      { path: 'number-counting', component: NumberCounting },
    ],
  },
]

export const appRoutesProviders: EnvironmentProviders = provideRouter(routes)
