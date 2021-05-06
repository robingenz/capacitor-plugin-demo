import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { FirebaseCrashlyticsPageRoutingModule } from './firebase-crashlytics-routing.module';
import { FirebaseCrashlyticsPage } from './firebase-crashlytics.page';

@NgModule({
  imports: [SharedModule, FirebaseCrashlyticsPageRoutingModule],
  declarations: [FirebaseCrashlyticsPage],
})
export class FirebaseCrashlyticsPageModule {}
