import type { ApplicationRef } from '@angular/core'
import { bootstrapApplication, type BootstrapContext } from '@angular/platform-browser'
import { App } from './app/app'
import { config } from './app/app.config.server'

function bootstrap(context: BootstrapContext): Promise<ApplicationRef> {
  return bootstrapApplication(App, config, context)
}

export default bootstrap
