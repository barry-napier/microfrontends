import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { GlobalContextService } from './shared/services/global-context.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule('app-myacme-home', './home').then(
        (m) => m.HomeComponent
      ),
    resolve: {
      context: () => inject(GlobalContextService).getContext(),
    },
  },
];
