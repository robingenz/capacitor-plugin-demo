import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileTransferPage } from './file-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: FileTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileTransferPageRoutingModule {}
