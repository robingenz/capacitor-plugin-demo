import { Component } from '@angular/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { Zip } from '@capawesome-team/capacitor-zip';
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.page.html',
  styleUrls: ['./zip.page.scss'],
})
export class ZipPage {
  public path: string | undefined;
  public copyToAppDirectory: boolean = false;
  public password: string = '';

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-plugins';

  constructor() {}

  public async pickFile(): Promise<void> {
    this.path = undefined;
    await Filesystem.requestPermissions();
    const { files } = await FilePicker.pickFiles({
      readData: this.copyToAppDirectory,
    });
    const file = files[0];
    // Workaround for https://github.com/ionic-team/capacitor-plugins/issues/2087
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

  public async unzip(): Promise<void> {
    if (!this.path) {
      return;
    }
    // Create the destination directory
    const directoryName = `${Date.now().toString()}`;
    await Filesystem.mkdir({
      path: directoryName,
      directory: Directory.Documents,
      recursive: true,
    });
    const { uri: destinationUri } = await Filesystem.getUri({
      path: directoryName,
      directory: Directory.Documents,
    });
    // Unzip the file
    await Zip.unzip({
      source: this.path,
      destination: destinationUri,
      password: this.password,
    });
    // List the files in the destination directory
    await Filesystem.readdir({
      path: destinationUri,
    });
  }

  public async zip(): Promise<void> {
    if (!this.path) {
      return;
    }
    // Create the destination uri
    const fileName = `${Date.now().toString()}.zip`;
    const { uri: destinationUri } = await Filesystem.getUri({
      path: fileName,
      directory: Directory.Documents,
    });
    // Zip the directory
    await Zip.zip({
      source: this.path,
      destination: destinationUri,
      password: this.password,
    });
    // Share the zip file
    await Share.share({ files: [destinationUri] });
    // await FileOpener.openFile({ path: destinationUri });
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
