import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirebasePerformancePage } from './firebase-performance.page';

const routes: Routes = [
  {
    path: '',
    component: FirebasePerformancePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebasePerformancePageRoutingModule {}
