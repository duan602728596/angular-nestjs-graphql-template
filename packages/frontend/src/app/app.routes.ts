import type { EnvironmentProviders } from '@angular/core'
import { provideRouter, type Routes } from '@angular/router'
import { Home } from './home/home'
import { MilitaryGenerals } from './military-generals/military-generals'
import { NumberCounting } from './number-counting/number-counting'

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'military-generals', component: MilitaryGenerals },
  { path: 'number-counting', component: NumberCounting },
]

export const appRoutesProviders: EnvironmentProviders = provideRouter(routes)
