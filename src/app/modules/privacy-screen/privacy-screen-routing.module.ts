import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyScreenPage } from './pages';

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
