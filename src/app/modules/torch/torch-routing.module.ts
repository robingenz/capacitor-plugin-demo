import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TorchPage } from './torch.page';

const routes: Routes = [
  {
    path: '',
    component: TorchPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TorchPageRoutingModule {}
