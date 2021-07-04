import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { FirebaseAppPageRoutingModule } from './firebase-app-routing.module';
import { FirebaseAppPage } from './firebase-app.page';

@NgModule({
  imports: [SharedModule, FirebaseAppPageRoutingModule],
  declarations: [FirebaseAppPage],
})
export class FirebaseAppPageModule {}
