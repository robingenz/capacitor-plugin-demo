import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Badge } from '@robingenz/capacitor-badge';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})
export class BadgePage implements OnInit {
  private readonly GH_URL = 'https://github.com/robingenz/capacitor-badge';
  public formGroup = new FormGroup({
    count: new FormControl(0),
  });
  public isSupported = false;

  constructor() {}

  public ngOnInit() {
    Badge.isSupported().then(result => {
      this.isSupported = result.isSupported;
    });
    this.refreshBadgeCount();
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async getBadgeCount(): Promise<number> {
    const result = await Badge.get();
    return result.count;
  }

  public async setBadgeCount(): Promise<void> {
    const count = this.formGroup.get('count')?.value || 0;
    await Badge.set({ count });
    await this.refreshBadgeCount();
  }

  public async clearBadgeCount(): Promise<void> {
    await Badge.clear();
    await this.refreshBadgeCount();
  }

  public async increaseBadgeCount(): Promise<void> {
    await Badge.increase();
    await this.refreshBadgeCount();
  }

  public async decreaseBadgeCount(): Promise<void> {
    await Badge.decrease();
    await this.refreshBadgeCount();
  }

  private async refreshBadgeCount(): Promise<void> {
    const count = await this.getBadgeCount();
    this.formGroup.setValue({ count });
  }
}
