import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppUpdatePageRoutingModule } from './app-update-routing.module';
import { AppUpdatePage } from './app-update.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AppUpdatePageRoutingModule],
  declarations: [AppUpdatePage],
})
export class AppUpdatePageModule {}
