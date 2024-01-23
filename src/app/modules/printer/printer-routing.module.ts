import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrinterPage } from './printer.page';

const routes: Routes = [
  {
    path: '',
    component: PrinterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrinterPageRoutingModule {}
