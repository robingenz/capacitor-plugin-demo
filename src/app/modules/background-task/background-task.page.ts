import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { PluginListenerHandle } from '@capacitor/core';
import { BackgroundTask } from '@capawesome/capacitor-background-task';

@Component({
  selector: 'app-background-task',
  templateUrl: './background-task.page.html',
  styleUrls: ['./background-task.page.scss'],
})
export class BackgroundTaskPage implements OnInit, OnDestroy {
  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-plugins';
  private appStateChangeListener: Promise<PluginListenerHandle> | undefined;

  constructor(private readonly ngZone: NgZone) {}

  public ngOnInit() {
    this.addListeners();
  }

  public ngOnDestroy() {
    this.appStateChangeListener?.then(listener => listener.remove());
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  private addListeners(): void {
    this.appStateChangeListener = App.addListener(
      'appStateChange',
      ({ isActive }) => {
        this.ngZone.run(async () => {
          if (isActive) {
            return;
          }
          const taskId = await BackgroundTask.beforeExit(async () => {
            await this.runTask();
            BackgroundTask.finish({ taskId });
          });
        });
      },
    );
  }

  private async runTask(): Promise<void> {
    const taskDurationMs = 120000;
    const end = new Date().getTime() + taskDurationMs;
    while (new Date().getTime() < end) {
      const isAppActive = await this.isAppActive();
      if (isAppActive) {
        break;
      }
      console.log('Background task still active.');
      await this.runInnerTask();
    }
  }

  private async runInnerTask(): Promise<void> {
    const taskDurationMs = 5000;
    const end = new Date().getTime() + taskDurationMs;
    while (new Date().getTime() < end) {}
  }

  private async isAppActive(): Promise<boolean> {
    const currentState = await App.getState();
    return currentState.isActive;
  }
}
