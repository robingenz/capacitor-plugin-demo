import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndroidDarkModeSupportPage } from './android-dark-mode-support.page';

const routes: Routes = [
  {
    path: '',
    component: AndroidDarkModeSupportPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndroidDarkModeSupportPageRoutingModule {}
