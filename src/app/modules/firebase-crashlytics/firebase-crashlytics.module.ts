import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FirebaseCrashlyticsPageRoutingModule } from './firebase-crashlytics-routing.module';
import { FirebaseCrashlyticsPage } from './firebase-crashlytics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseCrashlyticsPageRoutingModule,
  ],
  declarations: [FirebaseCrashlyticsPage],
})
export class FirebaseCrashlyticsPageModule {}
