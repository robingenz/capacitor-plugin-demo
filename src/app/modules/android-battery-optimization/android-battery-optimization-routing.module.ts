import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndroidBatteryOptimizationPage } from './android-battery-optimization.page';

const routes: Routes = [
  {
    path: '',
    component: AndroidBatteryOptimizationPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndroidBatteryOptimizationPageRoutingModule {}
