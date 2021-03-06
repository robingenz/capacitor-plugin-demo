import { Injectable } from '@angular/core';
import '@capacitor-community/privacy-screen';
import { Plugins } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class PrivacyScreenService {
  constructor() {}

  public async enable(): Promise<void> {
    await Plugins.PrivacyScreen.enable();
  }

  public async disable(): Promise<void> {
    await Plugins.PrivacyScreen.disable();
  }
}
