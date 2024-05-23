import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WifiPage } from './wifi.page';

const routes: Routes = [
  {
    path: '',
    component: WifiPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WifiPageRoutingModule {}
