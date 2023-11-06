import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { FileCompressorPageRoutingModule } from './file-compressor-routing.module';
import { FileCompressorPage } from './file-compressor.page';

@NgModule({
  imports: [SharedModule, FileCompressorPageRoutingModule],
  declarations: [FileCompressorPage],
})
export class FileCompressorPageModule {}
