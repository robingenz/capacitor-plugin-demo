import { Component, OnDestroy, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { PluginListenerHandle } from '@capacitor/core';
import { BackgroundTask } from '@robingenz/capacitor-background-task';

@Component({
  selector: 'app-background-task',
  templateUrl: './background-task.page.html',
  styleUrls: ['./background-task.page.scss'],
})
export class BackgroundTaskPage implements OnInit, OnDestroy {
  private readonly GH_URL =
    'https://github.com/robingenz/capacitor-background-task';
  private appStateChangeListener: PluginListenerHandle | undefined;

  constructor() {}

  public ngOnInit() {
    this.appStateChangeListener = App.addListener(
      'appStateChange',
      async ({ isActive }) => {
        if (isActive) {
          return;
        }
        const taskId = await BackgroundTask.beforeExit(async () => {
          await this.runTask();
          BackgroundTask.finish({ taskId });
        });
      },
    );
  }

  public ngOnDestroy() {
    this.appStateChangeListener?.remove();
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
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
