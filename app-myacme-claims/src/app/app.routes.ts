import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'claims',
    loadChildren: () =>
      import('./claims/claims.module').then((m) => m.ClaimsModule),
  },
  {
    path: '',
    redirectTo: 'claims',
    pathMatch: 'full',
  },
];
