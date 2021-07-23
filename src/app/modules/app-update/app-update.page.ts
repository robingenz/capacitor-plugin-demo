import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AppUpdate, AppUpdateInfo } from '@robingenz/capacitor-app-update';

@Component({
  selector: 'app-app-update',
  templateUrl: './app-update.page.html',
  styleUrls: ['./app-update.page.scss'],
})
export class AppUpdatePage implements OnInit {
  public appUpdateInfo: AppUpdateInfo | undefined;

  private readonly GH_URL = 'https://github.com/robingenz/capacitor-app-update';

  constructor(private readonly platform: Platform) {}

  public ngOnInit(): void {
    if (!this.platform.is('capacitor')) {
      return;
    }
    AppUpdate.getAppUpdateInfo().then(appUpdateInfo => {
      this.appUpdateInfo = appUpdateInfo;
    });
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async openAppStore(): Promise<void> {
    await AppUpdate.openAppStore();
  }

  public async performImmediateUpdate(): Promise<void> {
    await AppUpdate.performImmediateUpdate();
  }

  public async startFlexibleUpdate(): Promise<void> {
    await AppUpdate.startFlexibleUpdate();
  }

  public async completeFlexibleUpdate(): Promise<void> {
    await AppUpdate.completeFlexibleUpdate();
  }
}
