import { NgModule } from '@angular/core';

import { ZipPageRoutingModule } from './zip-routing.module';

import { SharedModule } from '@app/shared';
import { ZipPage } from './zip.page';

@NgModule({
  imports: [SharedModule, ZipPageRoutingModule],
  declarations: [ZipPage],
})
export class ZipPageModule {}
