import { Component } from '@angular/core';
import { Filesystem } from '@capacitor/filesystem';
import { FileOpener } from '@capawesome-team/capacitor-file-opener';
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-file-opener',
  templateUrl: './file-opener.page.html',
  styleUrls: ['./file-opener.page.scss'],
})
export class FileOpenerPage {
  public path: string | undefined;
  public base64String: string | undefined;

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-file-opener';

  constructor() {}

  public async pickFile(): Promise<void> {
    await Filesystem.requestPermissions();
    const { files } = await FilePicker.pickFiles({
      readData: false,
    });
    const path = files[0].path;
    if (!path) {
      return;
    }
    this.path = path;
  }

  public async openFile(): Promise<void> {
    if (!this.path) {
      return;
    }
    await FileOpener.openFile({ path: this.path });
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
