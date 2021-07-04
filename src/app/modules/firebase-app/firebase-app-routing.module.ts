import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebaseAppPage } from './firebase-app.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseAppPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseAppPageRoutingModule {}
