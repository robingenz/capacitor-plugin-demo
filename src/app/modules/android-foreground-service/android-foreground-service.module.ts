import { NgModule } from '@angular/core';

import { AndroidForegroundServicePageRoutingModule } from './android-foreground-service-routing.module';

import { SharedModule } from '@app/shared';
import { AndroidForegroundServicePage } from './android-foreground-service.page';

@NgModule({
  imports: [SharedModule, AndroidForegroundServicePageRoutingModule],
  declarations: [AndroidForegroundServicePage],
})
export class AndroidForegroundServicePageModule {}
