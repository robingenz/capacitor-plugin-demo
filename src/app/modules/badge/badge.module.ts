import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { BadgePageRoutingModule } from './badge-routing.module';
import { BadgePage } from './badge.page';

@NgModule({
  imports: [SharedModule, BadgePageRoutingModule],
  declarations: [BadgePage],
})
export class BadgePageModule {}
