import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveUpdatePage } from './live-update.page';

const routes: Routes = [
  {
    path: '',
    component: LiveUpdatePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveUpdatePageRoutingModule {}
