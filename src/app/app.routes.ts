import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./pages/vista-inicio/vista-inicio.component').then(
        (c) => c.VistaInicioComponent
      ),
  },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
];
