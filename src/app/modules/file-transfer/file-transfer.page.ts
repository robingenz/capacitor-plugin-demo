import { Component } from '@angular/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
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
    const fileName = 'file.pdf';
    const { uri } = await Filesystem.getUri({
      path: fileName,
      directory: Directory.Cache,
    });
    await FileTransfer.downloadFile(
      {
        url: `https://proposition-understand-boys-lending.trycloudflare.com/download/${fileName}`,
        path: uri,
      },
      (event, error) => {
        console.log('downloadFile', { event, error });
      },
    );
  }

  public async uploadFile(): Promise<void> {
    const { files } = await FilePicker.pickFiles();
    const file = files[0];
    if (!file) {
      return;
    }
    await FileTransfer.uploadFile(
      {
        path: file.path || '',
        url: 'https://proposition-understand-boys-lending.trycloudflare.com/upload',
        fileKey: 'file',
        fileName: file.name,
        mimeType: file.mimeType,
      },
      (event, error) => {
        console.log('uploadFile', { event, error });
      },
    );
  }
}
