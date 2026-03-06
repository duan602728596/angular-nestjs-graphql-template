import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MilitaryGenerals } from './military-generals/military-generals';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'military-generals', component: MilitaryGenerals }
];