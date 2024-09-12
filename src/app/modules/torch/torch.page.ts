import { Component } from '@angular/core';
import { Torch } from '@capawesome/capacitor-torch';

@Component({
  selector: 'app-torch',
  templateUrl: './torch.page.html',
  styleUrls: ['./torch.page.scss'],
})
export class TorchPage {
  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-plugins';

  constructor() {}

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async enable(): Promise<void> {
    await Torch.enable();
  }

  public async disable(): Promise<void> {
    await Torch.disable();
  }

  public async isAvailable(): Promise<void> {
    await Torch.isAvailable();
  }

  public async isEnabled(): Promise<void> {
    await Torch.isEnabled();
  }

  public async toggle(): Promise<void> {
    await Torch.toggle();
  }
}
