import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { BackgroundTask } from '@robingenz/capacitor-background-task';

@Component({
  selector: 'app-background-task',
  templateUrl: './background-task.page.html',
  styleUrls: ['./background-task.page.scss'],
})
export class BackgroundTaskPage implements OnInit {
  private readonly GH_URL =
    'https://github.com/robingenz/capacitor-background-task';

  constructor() { }

  public ngOnInit() {
    App.addListener('appStateChange', async ({ isActive }) => {
      if (isActive) {
        return;
      }
      const taskId = await BackgroundTask.beforeExit(async () => {
        await this.runTask();
        BackgroundTask.finish({ taskId });
      });
    });
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
    while (new Date().getTime() < end) { }
  }

  private async isAppActive(): Promise<boolean> {
    const currentState = await App.getState();
    return currentState.isActive;
  }
}
