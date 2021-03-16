import { Injectable } from '@angular/core';
import { PrivacyScreen } from '@capacitor-community/privacy-screen';

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
