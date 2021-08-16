import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { ManagedConfigurationsPageRoutingModule } from './managed-configurations-routing.module';
import { ManagedConfigurationsPage } from './managed-configurations.page';

@NgModule({
  imports: [SharedModule, ManagedConfigurationsPageRoutingModule],
  declarations: [ManagedConfigurationsPage],
})
export class ManagedConfigurationsPageModule {}
