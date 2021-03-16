import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { PrivacyScreenPageRoutingModule } from './privacy-screen-routing.module';
import { PrivacyScreenPage } from './privacy-screen.page';

@NgModule({
  imports: [SharedModule, PrivacyScreenPageRoutingModule],
  declarations: [PrivacyScreenPage],
})
export class PrivacyScreenPageModule {}
