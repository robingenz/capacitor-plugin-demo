import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacyScreenPageRoutingModule } from './privacy-screen-routing.module';
import { PrivacyScreenPage } from './pages';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacyScreenPageRoutingModule,
  ],
  declarations: [PrivacyScreenPage],
})
export class PrivacyScreenPageModule {}
