import { Component } from '@angular/core';
import { Posthog } from '@capawesome/capacitor-posthog';

@Component({
  selector: 'app-posthog',
  templateUrl: './posthog.page.html',
  styleUrls: ['./posthog.page.scss'],
})
export class PosthogPage {
  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-plugins';

  constructor() {}

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async capture(): Promise<void> {
    Posthog.capture({
      event: 'test',
      properties: {
        key: 'value',
      },
    });
  }

  public async setup(): Promise<void> {
    Posthog.setup({
      apiKey: 'phc_g8wMenebiIQ1pYd5v9Vy7oakn6MczVKIsNG5ZHCspdy',
      host: 'https://eu.i.posthog.com',
    });
  }
}
