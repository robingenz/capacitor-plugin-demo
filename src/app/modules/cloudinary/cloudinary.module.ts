import { NgModule } from '@angular/core';

import { CloudinaryPageRoutingModule } from './cloudinary-routing.module';

import { SharedTestingModule } from '@tests/modules';
import { CloudinaryPage } from './cloudinary.page';

@NgModule({
  imports: [SharedTestingModule, CloudinaryPageRoutingModule],
  declarations: [CloudinaryPage],
})
export class CloudinaryPageModule {}
