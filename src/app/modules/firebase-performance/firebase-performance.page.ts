import { Component } from '@angular/core';
import { FirebasePerformance } from '@robingenz/capacitor-firebase-performance';

@Component({
  selector: 'app-firebase-performance',
  templateUrl: './firebase-performance.page.html',
  styleUrls: ['./firebase-performance.page.scss'],
})
export class FirebasePerformancePage {
  private readonly GH_URL =
    'https://github.com/robingenz/capacitor-firebase-performance';

  constructor() {}

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async startTrace(): Promise<void> {
    await FirebasePerformance.startTrace({ traceName: 'test_trace' });
  }

  public async stopTrace(): Promise<void> {
    await FirebasePerformance.stopTrace({ traceName: 'test_trace' });
  }

  public async incrementMetric(): Promise<void> {
    await FirebasePerformance.incrementMetric({
      traceName: 'test_trace',
      metricName: 'item_cache_hit',
      incrementBy: 1,
    });
  }
}
