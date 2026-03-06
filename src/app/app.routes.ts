import { Routes } from '@angular/router';
import { Dashboard } from './layout/dashboard/dashboard';
import { Inicio } from './pages/inicio/inicio';
import { SobreNosotros } from './pages/sobre-nosotros/sobre-nosotros';
import { Radio } from './pages/radio/radio';
import { Donaciones } from './pages/donaciones/donaciones';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: Inicio },
      { path: 'sobre-nosotros', component: SobreNosotros },
      { path: 'radio', component: Radio },
      { path: 'donaciones', component: Donaciones }
    ]
  },
  { path: '**', redirectTo: 'inicio' }
];
