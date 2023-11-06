import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileCompressorPage } from './file-compressor.page';

const routes: Routes = [
  {
    path: '',
    component: FileCompressorPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileCompressorPageRoutingModule {}
