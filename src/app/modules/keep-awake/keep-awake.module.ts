import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { KeepAwakePageRoutingModule } from './keep-awake-routing.module';
import { KeepAwakePage } from './keep-awake.page';

@NgModule({
  imports: [SharedModule, KeepAwakePageRoutingModule],
  declarations: [KeepAwakePage],
})
export class KeepAwakePageModule {}
