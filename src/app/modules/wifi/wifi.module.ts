import { NgModule } from '@angular/core';

import { WifiPageRoutingModule } from './wifi-routing.module';

import { SharedModule } from '@app/shared';
import { WifiPage } from './wifi.page';

@NgModule({
  imports: [SharedModule, WifiPageRoutingModule],
  declarations: [WifiPage],
})
export class WifiPageModule {}
