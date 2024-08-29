import { Component } from '@angular/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { FileOpener } from '@capawesome-team/capacitor-file-opener';
import { FileTransfer } from '@capawesome-team/capacitor-file-transfer';
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-file-transfer',
  templateUrl: './file-transfer.page.html',
  styleUrls: ['./file-transfer.page.scss'],
})
export class FileTransferPage {
  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-plugins';

  constructor() {}

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async abort(): Promise<void> {}

  public async downloadFile(): Promise<void> {
    const fileName = 'selfie1.jpg';
    const { uri } = await Filesystem.getUri({
      path: fileName,
      directory: Directory.Cache,
    });
    await FileTransfer.downloadFile(
      {
        url: `https://symposium-creating-gordon-nepal.trycloudflare.com/download/${fileName}`,
        path: uri,
      },
      (event, error) => {
        console.log('downloadFile', { event, error });
        if (event && event.currentBytes === event.totalBytes) {
          void FileOpener.openFile({
            path: uri,
          });
        }
      },
    );
  }

  public async uploadFile(): Promise<void> {
    const { files } = await FilePicker.pickFiles();
    const file = files[0];
    if (!file) {
      return;
    }
    // const result = await Filesystem.writeFile({
    //   data: file.data || '',
    //   path: file.name,
    //   directory: Directory.Cache,
    // });
    await FileTransfer.uploadFile(
      {
        path: file.path || '',
        url: 'https://symposium-creating-gordon-nepal.trycloudflare.com/upload',
        fileKey: 'file',
        fileName: file.name,
        mimeType: file.mimeType,
      },
      (event, error) => {
        const progress = (event?.currentBytes || 0) / (event?.totalBytes || 1);
        console.log('uploadFile', progress);
      },
    );
  }
}
