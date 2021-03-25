import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackgroundTaskPageRoutingModule } from './background-task-routing.module';

import { BackgroundTaskPage } from './background-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackgroundTaskPageRoutingModule
  ],
  declarations: [BackgroundTaskPage]
})
export class BackgroundTaskPageModule {}
