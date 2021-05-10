import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenOrientationPage } from './screen-orientation.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenOrientationPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenOrientationPageRoutingModule {}
