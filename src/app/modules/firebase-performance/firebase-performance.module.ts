import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { FirebasePerformancePageRoutingModule } from './firebase-performance-routing.module';
import { FirebasePerformancePage } from './firebase-performance.page';

@NgModule({
  imports: [SharedModule, FirebasePerformancePageRoutingModule],
  declarations: [FirebasePerformancePage],
})
export class FirebasePerformancePageModule {}
