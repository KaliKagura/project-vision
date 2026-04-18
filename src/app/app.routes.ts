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
        path: 'proyectos',
        loadComponent: () => import('./pages/projects/projects.page').then((m) => m.ProjectsPage),
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
