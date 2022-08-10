import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimePickerPage } from './datetime-picker.page';

const routes: Routes = [
  {
    path: '',
    component: DatetimePickerPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimePickerPageRoutingModule {}
