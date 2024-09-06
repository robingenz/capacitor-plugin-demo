import { NgModule } from '@angular/core';

import { PosthogPageRoutingModule } from './posthog-routing.module';

import { SharedModule } from '@app/shared';
import { PosthogPage } from './posthog.page';

@NgModule({
  imports: [SharedModule, PosthogPageRoutingModule],
  declarations: [PosthogPage],
})
export class PosthogPageModule {}
