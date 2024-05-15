import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BluetoothLowEnergyPage } from './bluetooth-low-energy.page';

const routes: Routes = [
  {
    path: '',
    component: BluetoothLowEnergyPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BluetoothLowEnergyPageRoutingModule {}
