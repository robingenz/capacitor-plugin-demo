import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeepAwakePage } from './keep-awake.page';

const routes: Routes = [
  {
    path: '',
    component: KeepAwakePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeepAwakePageRoutingModule {}
