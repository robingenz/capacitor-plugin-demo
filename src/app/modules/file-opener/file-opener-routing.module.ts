import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileOpenerPage } from './file-opener.page';

const routes: Routes = [
  {
    path: '',
    component: FileOpenerPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileOpenerPageRoutingModule {}
