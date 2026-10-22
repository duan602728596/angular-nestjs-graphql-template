/// <reference types="@angular/localize" />

import type { ApplicationConfig } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { getLocaleBaseHref, type IParseLocaleReturnType, parseLocale } from '#utils/i18n'
import { App } from './app/app'
import { createAppConfig } from './app/app.config'

const parsedPathnameLocale: IParseLocaleReturnType | undefined = parseLocale(window.location.pathname)
const appConfig: ApplicationConfig = await createAppConfig(
  parsedPathnameLocale?.locale,
  getLocaleBaseHref(parsedPathnameLocale?.rawLocale),
)

bootstrapApplication(App, appConfig).catch((err: Error): void => console.error(err))
