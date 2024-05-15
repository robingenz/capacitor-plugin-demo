import { Component, NgZone, OnInit } from '@angular/core';
import { ForegroundService } from '@capawesome-team/capacitor-android-foreground-service';

@Component({
  selector: 'app-android-foreground-service',
  templateUrl: './android-foreground-service.page.html',
  styleUrls: ['./android-foreground-service.page.scss'],
})
export class AndroidForegroundServicePage implements OnInit {
  public isEnabled: boolean = false;

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-plugins';

  constructor(private readonly ngZone: NgZone) {}

  public ngOnInit(): void {
    this.addListeners();
  }

  public async requestPermissions(): Promise<void> {
    await ForegroundService.requestPermissions();
  }

  public async requestManageOverlayPermission(): Promise<void> {
    await ForegroundService.requestManageOverlayPermission();
  }

  public async startForegroundService(): Promise<void> {
    await ForegroundService.startForegroundService({
      buttons: [
        {
          id: 1,
          title: 'Stop',
        },
      ],
      body: 'This is the body of the notification',
      title: 'This is the title of the notification',
      id: 12398473,
      smallIcon: 'push_icon',
    });
  }

  public async stopForegroundService(): Promise<void> {
    await ForegroundService.stopForegroundService();
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  private addListeners(): void {
    ForegroundService.removeAllListeners().then(() => {
      ForegroundService.addListener('buttonClicked', event => {
        this.ngZone.run(() => {
          ForegroundService.stopForegroundService();
          ForegroundService.moveToForeground();
        });
      });
    });
  }
}
