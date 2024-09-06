import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PosthogPage } from './posthog.page';

const routes: Routes = [
  {
    path: '',
    component: PosthogPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosthogPageRoutingModule {}
