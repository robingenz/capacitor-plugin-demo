import { NgModule } from '@angular/core';

import { PrinterPageRoutingModule } from './printer-routing.module';

import { SharedModule } from '@app/shared';
import { PrinterPage } from './printer.page';

@NgModule({
  imports: [SharedModule, PrinterPageRoutingModule],
  declarations: [PrinterPage],
})
export class PrinterPageModule {}
