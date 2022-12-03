import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloudinaryPage } from './cloudinary.page';

const routes: Routes = [
  {
    path: '',
    component: CloudinaryPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloudinaryPageRoutingModule {}
