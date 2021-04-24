import { Component } from '@angular/core';
import { FirebaseCrashlytics } from '@capacitor-community/firebase-crashlytics';

@Component({
  selector: 'app-firebase-crashlytics',
  templateUrl: './firebase-crashlytics.page.html',
  styleUrls: ['./firebase-crashlytics.page.scss'],
})
export class FirebaseCrashlyticsPage {
  private readonly GH_URL =
    'https://github.com/capacitor-community/firebase-crashlytics';

  constructor() {}

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async crash(): Promise<void> {
    await FirebaseCrashlytics.crash({ message: 'Test' });
  }
}
