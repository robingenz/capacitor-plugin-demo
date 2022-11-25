import { Component } from '@angular/core';
import { BatteryOptimization } from '@capawesome-team/capacitor-android-battery-optimization';

@Component({
  selector: 'app-android-battery-optimization',
  templateUrl: './android-battery-optimization.page.html',
  styleUrls: ['./android-battery-optimization.page.scss'],
})
export class AndroidBatteryOptimizationPage {
  public isEnabled: boolean = false;

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-android-battery-optimization';

  constructor() {}

  public async isBatteryOptimizationEnabled(): Promise<void> {
    const { enabled } =
      await BatteryOptimization.isBatteryOptimizationEnabled();
    this.isEnabled = enabled;
  }

  public async openBatteryOptimizationSettings(): Promise<void> {
    await BatteryOptimization.openBatteryOptimizationSettings();
  }

  public async requestIgnoreBatteryOptimization(): Promise<void> {
    await BatteryOptimization.requestIgnoreBatteryOptimization();
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
