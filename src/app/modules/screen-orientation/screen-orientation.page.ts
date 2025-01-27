import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Capacitor, PluginListenerHandle } from '@capacitor/core';
import { ScreenOrientation } from '@capawesome/capacitor-screen-orientation';

@Component({
  selector: 'app-screen-orientation',
  templateUrl: './screen-orientation.page.html',
  styleUrls: ['./screen-orientation.page.scss'],
})
export class ScreenOrientationPage implements OnInit, OnDestroy {
  public currentOrientation = '';

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-plugins';

  private orientationChangeListener: Promise<PluginListenerHandle> | undefined;

  constructor(private readonly ngZone: NgZone) {}

  public ngOnInit() {
    this.addListeners();
  }

  public ngOnDestroy() {
    this.orientationChangeListener?.then(listener => listener.remove());
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async getCurrentOrientation(): Promise<void> {
    const { type } = await ScreenOrientation.getCurrentOrientation();
    this.currentOrientation = type;
  }

  public async lock(): Promise<void> {
    await this.requestFullscreen();
    const currentOrientation = await ScreenOrientation.getCurrentOrientation();
    await ScreenOrientation.lock({ type: currentOrientation.type });
  }

  public async unlock(): Promise<void> {
    await ScreenOrientation.unlock();
  }

  private addListeners(): void {
    this.orientationChangeListener = ScreenOrientation.addListener(
      'screenOrientationChange',
      async ({ type }) => {
        this.ngZone.run(() => {
          this.currentOrientation = type;
        });
      },
    );
  }

  private async requestFullscreen(): Promise<void> {
    if (Capacitor.getPlatform() !== 'web') {
      return;
    }
    if (document.fullscreenElement) {
      return;
    }
    return document.documentElement.requestFullscreen();
  }
}
