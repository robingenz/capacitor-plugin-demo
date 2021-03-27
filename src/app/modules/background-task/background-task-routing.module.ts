import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackgroundTaskPage } from './background-task.page';

const routes: Routes = [
  {
    path: '',
    component: BackgroundTaskPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackgroundTaskPageRoutingModule {}
