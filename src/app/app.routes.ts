import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  {
    path: 'todos',
    loadComponent: () => import('./todos').then((m) => m.TodosListComponent),
  },
  {
    path: 'progress',
    loadComponent: () =>
      import('./progress/progress.component').then((m) => m.ProgressComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'help',
    loadComponent: () =>
      import('./help/help.component').then((m) => m.HelpComponent),
  },
  {
    path: 'reset',
    loadComponent: () =>
      import('./reset/reset.component').then((m) => m.ResetComponent),
  },
  {
    path: 'version',
    loadComponent: () =>
      import('./version/version.component').then((m) => m.VersionComponent),
  },
  { path: '**', redirectTo: 'todos' },
];
