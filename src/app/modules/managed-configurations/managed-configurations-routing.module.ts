import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagedConfigurationsPage } from './managed-configurations.page';

const routes: Routes = [
  {
    path: '',
    component: ManagedConfigurationsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagedConfigurationsPageRoutingModule {}
