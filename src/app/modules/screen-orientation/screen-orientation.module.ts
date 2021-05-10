import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { ScreenOrientationPageRoutingModule } from './screen-orientation-routing.module';
import { ScreenOrientationPage } from './screen-orientation.page';

@NgModule({
  imports: [SharedModule, ScreenOrientationPageRoutingModule],
  declarations: [ScreenOrientationPage],
})
export class ScreenOrientationPageModule {}
