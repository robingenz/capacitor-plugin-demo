import { NgModule } from '@angular/core';

import { BarcodeScannerPageRoutingModule } from './barcode-scanner-routing.module';

import { SharedTestingModule } from '@tests/modules';
import { BarcodeScannerModalComponent } from './barcode-scanner-modal.component';
import { BarcodeScannerPage } from './barcode-scanner.page';

@NgModule({
  imports: [SharedTestingModule, BarcodeScannerPageRoutingModule],
  declarations: [BarcodeScannerPage, BarcodeScannerModalComponent],
})
export class BarcodeScannerPageModule {}
