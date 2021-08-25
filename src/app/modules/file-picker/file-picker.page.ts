import { Component } from '@angular/core';
import { FilePicker, PickFileResult } from '@robingenz/capacitor-file-picker';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.page.html',
  styleUrls: ['./file-picker.page.scss'],
})
export class FilePickerPage {
  public lastResult: PickFileResult | undefined;

  private readonly GH_URL =
    'https://github.com/robingenz/capacitor-file-picker';

  constructor() {}

  public async pickFile(): Promise<void> {
    this.lastResult = await FilePicker.pickFile();
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
