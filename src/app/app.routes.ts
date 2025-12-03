import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', //application root
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    loadComponent: () => import('./todos').then(m => m.TodosListComponent)
  },
  {
    path: '**',
    redirectTo: 'todos'
  }

];