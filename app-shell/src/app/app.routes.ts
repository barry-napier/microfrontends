import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { GlobalContextService } from './shared/services/global-context.service';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      loadRemoteModule('app-myacme-home', './home').then(
        (m) => m.HomeComponent
      ),
    resolve: {
      context: () => inject(GlobalContextService).getContext(),
    },
  },
  {
    path: 'claims',
    loadChildren: () =>
      loadRemoteModule('app-myacme-claims', './Module').then(
        (m) => m.ClaimsModule
      ),
    resolve: {
      context: () => inject(GlobalContextService).getContext(),
    },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
