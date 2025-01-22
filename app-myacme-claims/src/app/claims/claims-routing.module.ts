import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './claims/claims.component';
import { ClaimsSummaryComponent } from './claims-summary/claims-summary.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';

const routes: Routes = [
  {
    path: '',
    component: ClaimsComponent,
    children: [
      {
        path: '',
        redirectTo: 'summary',
        pathMatch: 'full',
      },
      {
        path: 'summary',
        component: ClaimsSummaryComponent,
      },
      {
        path: ':id',
        component: ClaimDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimsRoutingModule {}
