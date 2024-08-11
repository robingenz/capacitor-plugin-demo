import { NgModule } from '@angular/core';

import { FileTransferPageRoutingModule } from './file-transfer-routing.module';

import { SharedModule } from '@app/shared';
import { FileTransferPage } from './file-transfer.page';

@NgModule({
  imports: [SharedModule, FileTransferPageRoutingModule],
  declarations: [FileTransferPage],
})
export class FileTransferPageModule {}
