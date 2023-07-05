import { Component } from '@angular/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
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
  public copyToAppDirectory: boolean = false;

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-file-opener';

  constructor() {}

  public async pickFile(): Promise<void> {
    this.path = undefined;
    await Filesystem.requestPermissions();
    const { files } = await FilePicker.pickFiles({
      readData: this.copyToAppDirectory,
    });
    const file = files[0];
    if (this.copyToAppDirectory && file.data) {
      await Filesystem.writeFile({
        data: file.data,
        path: file.name,
        directory: Directory.Library,
      });
      const { uri } = await Filesystem.getUri({
        path: file.name,
        directory: Directory.Library,
      });
      this.path = uri;
    } else if (file.path) {
      this.path = file.path;
    }
  }

  public async openFile(): Promise<void> {
    if (!this.path) {
      return;
    }
    await FileOpener.openFile({ path: this.path });
    console.log('File opened');
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
