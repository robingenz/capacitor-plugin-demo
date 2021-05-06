import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { BackgroundTaskPageRoutingModule } from './background-task-routing.module';
import { BackgroundTaskPage } from './background-task.page';

@NgModule({
  imports: [SharedModule, BackgroundTaskPageRoutingModule],
  declarations: [BackgroundTaskPage],
})
export class BackgroundTaskPageModule {}
