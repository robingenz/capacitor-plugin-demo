import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgePage } from './badge.page';

const routes: Routes = [
  {
    path: '',
    component: BadgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgePageRoutingModule {}
