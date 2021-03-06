import { Component } from '@angular/core';
import '@capacitor-community/privacy-screen';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-privacy-screen',
  templateUrl: './privacy-screen.page.html',
  styleUrls: ['./privacy-screen.page.scss'],
})
export class PrivacyScreenPage {
  private readonly GH_URL =
    'https://github.com/capacitor-community/privacy-screen';

  constructor() {}

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async enable(): Promise<void> {
    await Plugins.PrivacyScreen.enable();
  }

  public async disable(): Promise<void> {
    await Plugins.PrivacyScreen.enable();
  }
}
