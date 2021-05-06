import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { AndroidDarkModeSupportPageRoutingModule } from './android-dark-mode-support-routing.module';
import { AndroidDarkModeSupportPage } from './android-dark-mode-support.page';

@NgModule({
  imports: [SharedModule, AndroidDarkModeSupportPageRoutingModule],
  declarations: [AndroidDarkModeSupportPage],
})
export class AndroidDarkModeSupportPageModule {}
