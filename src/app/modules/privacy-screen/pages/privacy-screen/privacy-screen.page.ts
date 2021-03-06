import { Component } from '@angular/core';
import { PrivacyScreenService } from '../../services';

@Component({
  selector: 'app-privacy-screen',
  templateUrl: './privacy-screen.page.html',
  styleUrls: ['./privacy-screen.page.scss'],
})
export class PrivacyScreenPage {
  private readonly GH_URL =
    'https://github.com/capacitor-community/privacy-screen';

  constructor(private readonly privacyScreenService: PrivacyScreenService) {}

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async enable(): Promise<void> {
    await this.privacyScreenService.enable();
  }

  public async disable(): Promise<void> {
    await this.privacyScreenService.disable();
  }
}
