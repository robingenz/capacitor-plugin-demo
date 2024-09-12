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

  public async alias(): Promise<void> {
    Posthog.alias({
      alias: 'alias',
    });
  }

  public async capture(): Promise<void> {
    Posthog.capture({
      event: 'test',
      properties: {
        key: 'value',
      },
    });
  }

  public async flush(): Promise<void> {
    Posthog.flush();
  }

  public async identify(): Promise<void> {
    Posthog.identify({
      distinctId: 'distinctId',
    });
  }

  public async register(): Promise<void> {
    Posthog.register({
      key: 'key',
      value: 'value',
    });
  }

  public async reset(): Promise<void> {
    Posthog.reset();
  }

  public async screen(): Promise<void> {
    Posthog.screen({
      screenTitle: 'screenTitle',
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

  public async unregister(): Promise<void> {
    Posthog.unregister({
      key: 'key',
    });
  }
}
