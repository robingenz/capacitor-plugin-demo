import { Component } from '@angular/core';

@Component({
  selector: 'app-android-dark-mode-support',
  templateUrl: './android-dark-mode-support.page.html',
  styleUrls: ['./android-dark-mode-support.page.scss'],
})
export class AndroidDarkModeSupportPage {
  private readonly GH_URL =
    'https://github.com/robingenz/capacitor-android-dark-mode-support';

  constructor() {}

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
