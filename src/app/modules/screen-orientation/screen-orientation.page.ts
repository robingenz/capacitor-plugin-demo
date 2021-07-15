import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ScreenOrientation } from '@robingenz/capacitor-screen-orientation';

@Component({
  selector: 'app-screen-orientation',
  templateUrl: './screen-orientation.page.html',
  styleUrls: ['./screen-orientation.page.scss'],
})
export class ScreenOrientationPage {
  private readonly GH_URL =
    'https://github.com/robingenz/capacitor-screen-orientation';

  constructor(private readonly platform: Platform) {}

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async lock(): Promise<void> {
    await this.requestFullscreen();
    const currentOrientation = await ScreenOrientation.getCurrentOrientation();
    await ScreenOrientation.lock({ type: currentOrientation.type });
  }

  public async unlock(): Promise<void> {
    await ScreenOrientation.unlock();
  }

  private async requestFullscreen(): Promise<void> {
    if (this.platform.is('capacitor')) {
      return;
    }
    if (document.fullscreenElement) {
      return;
    }
    return document.documentElement.requestFullscreen();
  }
}
