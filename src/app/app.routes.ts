import { Routes } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

export const routes: Routes = [
  {
    path: '',
    component: Navbar,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inicio',
      },
      {
        path: 'inicio',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'servicios',
        loadComponent: () => import('./pages/services/services.page').then((m) => m.ServicesPage),
      },
      {
        path: 'contacto',
        loadComponent: () => import('./pages/contact/contact.page').then((m) => m.ContactPage),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];
