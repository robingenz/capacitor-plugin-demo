import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AndroidDarkModeSupportPageRoutingModule } from './android-dark-mode-support-routing.module';

import { AndroidDarkModeSupportPage } from './android-dark-mode-support.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AndroidDarkModeSupportPageRoutingModule
  ],
  declarations: [AndroidDarkModeSupportPage]
})
export class AndroidDarkModeSupportPageModule {}
