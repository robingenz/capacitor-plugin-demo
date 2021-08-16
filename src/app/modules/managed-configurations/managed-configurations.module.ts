import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagedConfigurationsPageRoutingModule } from './managed-configurations-routing.module';

import { ManagedConfigurationsPage } from './managed-configurations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagedConfigurationsPageRoutingModule
  ],
  declarations: [ManagedConfigurationsPage]
})
export class ManagedConfigurationsPageModule {}
