import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { AppUpdatePageRoutingModule } from './app-update-routing.module';
import { AppUpdatePage } from './app-update.page';

@NgModule({
  imports: [SharedModule, AppUpdatePageRoutingModule],
  declarations: [AppUpdatePage],
})
export class AppUpdatePageModule {}
