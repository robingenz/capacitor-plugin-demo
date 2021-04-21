import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseCrashlyticsPage } from './firebase-crashlytics.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseCrashlyticsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseCrashlyticsPageRoutingModule {}
