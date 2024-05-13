import { NgModule } from '@angular/core';

import { BluetoothLowEnergyPageRoutingModule } from './bluetooth-low-energy-routing.module';

import { SharedModule } from '@app/shared';
import { BluetoothLowEnergyDeviceComponent } from './bluetooth-low-energy-device/bluetooth-low-energy-device.component';
import { BluetoothLowEnergyPage } from './bluetooth-low-energy.page';

@NgModule({
  imports: [SharedModule, BluetoothLowEnergyPageRoutingModule],
  declarations: [BluetoothLowEnergyPage, BluetoothLowEnergyDeviceComponent],
})
export class BluetoothLowEnergyPageModule {}
