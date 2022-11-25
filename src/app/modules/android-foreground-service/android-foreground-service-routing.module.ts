import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndroidForegroundServicePage } from './android-foreground-service.page';

const routes: Routes = [
  {
    path: '',
    component: AndroidForegroundServicePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndroidForegroundServicePageRoutingModule {}
