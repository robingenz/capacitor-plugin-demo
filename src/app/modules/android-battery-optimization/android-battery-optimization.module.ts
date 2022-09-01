import { NgModule } from '@angular/core';

import { AndroidBatteryOptimizationPageRoutingModule } from './android-battery-optimization-routing.module';

import { SharedModule } from '@app/shared';
import { AndroidBatteryOptimizationPage } from './android-battery-optimization.page';

@NgModule({
  imports: [SharedModule, AndroidBatteryOptimizationPageRoutingModule],
  declarations: [AndroidBatteryOptimizationPage],
})
export class AndroidBatteryOptimizationPageModule {}
