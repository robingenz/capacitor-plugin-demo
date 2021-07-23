import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUpdatePage } from './app-update.page';

const routes: Routes = [
  {
    path: '',
    component: AppUpdatePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppUpdatePageRoutingModule {}
