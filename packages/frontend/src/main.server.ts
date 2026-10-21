import type { ApplicationRef } from '@angular/core'
import { bootstrapApplication, type BootstrapContext } from '@angular/platform-browser'
import { App } from './app/app'
import { appConfig } from './app/app.config'

function bootstrap(context: BootstrapContext): Promise<ApplicationRef> {
  return bootstrapApplication(App, appConfig, context)
}

export default bootstrap
