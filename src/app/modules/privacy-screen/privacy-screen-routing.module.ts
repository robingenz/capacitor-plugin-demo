import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyScreenPage } from './privacy-screen.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacyScreenPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacyScreenPageRoutingModule {}
