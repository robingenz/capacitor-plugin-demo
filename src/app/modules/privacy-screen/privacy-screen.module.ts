import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { PrivacyScreenPage } from './pages';
import { PrivacyScreenPageRoutingModule } from './privacy-screen-routing.module';

@NgModule({
  imports: [SharedModule, PrivacyScreenPageRoutingModule],
  declarations: [PrivacyScreenPage],
})
export class PrivacyScreenPageModule {}
