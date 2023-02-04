import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarcodeScannerPage } from './barcode-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: BarcodeScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarcodeScannerPageRoutingModule {}
