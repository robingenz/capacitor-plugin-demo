import { Component } from '@angular/core';
import { KeepAwake } from '@capacitor-community/keep-awake';

@Component({
  selector: 'app-keep-awake',
  templateUrl: './keep-awake.page.html',
  styleUrls: ['./keep-awake.page.scss'],
})
export class KeepAwakePage {
  private readonly GH_URL = 'https://github.com/capacitor-community/keep-awake';

  constructor() {}

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async keepAwake(): Promise<void> {
    await KeepAwake.keepAwake();
  }

  public async allowSleep(): Promise<void> {
    await KeepAwake.allowSleep();
  }
}
