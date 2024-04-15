import { NgModule } from '@angular/core';


import { LiveUpdatePageRoutingModule } from './live-update-routing.module';

import { SharedModule } from '@app/shared';
import { LiveUpdatePage } from './live-update.page';

@NgModule({
  imports: [
    SharedModule,
    LiveUpdatePageRoutingModule
  ],
  declarations: [LiveUpdatePage]
})
export class LiveUpdatePageModule {}
