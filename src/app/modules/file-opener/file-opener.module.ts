import { NgModule } from '@angular/core';

import { FileOpenerPageRoutingModule } from './file-opener-routing.module';

import { SharedModule } from '@app/shared';
import { FileOpenerPage } from './file-opener.page';

@NgModule({
  imports: [SharedModule, FileOpenerPageRoutingModule],
  declarations: [FileOpenerPage],
})
export class FileOpenerPageModule {}
