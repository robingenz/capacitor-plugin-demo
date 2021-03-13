import { Injectable } from '@angular/core';
import '@capacitor-community/privacy-screen';
import { PrivacyScreenPlugin } from '@capacitor-community/privacy-screen';
import { Plugins } from '@capacitor/core';
const PrivacyScreen: PrivacyScreenPlugin = Plugins.PrivacyScreen as PrivacyScreenPlugin;

@Injectable({
  providedIn: 'root',
})
export class PrivacyScreenService {
  constructor() {}

  public async enable(): Promise<void> {
    await PrivacyScreen.enable();
  }

  public async disable(): Promise<void> {
    await PrivacyScreen.disable();
  }
}
