import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeepAwakePageRoutingModule } from './keep-awake-routing.module';

import { KeepAwakePage } from './keep-awake.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, KeepAwakePageRoutingModule],
  declarations: [KeepAwakePage],
})
export class KeepAwakePageModule {}
