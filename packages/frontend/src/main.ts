/// <reference types="@angular/localize" />

import type { ApplicationConfig } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { loadI18n } from '#utils/i18n'
import { App } from './app/app'
import { createAppConfig } from './app/app.config'

const locale: string = await loadI18n()
const appConfig: ApplicationConfig = await createAppConfig(locale)

bootstrapApplication(App, appConfig).catch((err: Error): void => console.error(err))
