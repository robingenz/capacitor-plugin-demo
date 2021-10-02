import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Filesystem } from '@capacitor/filesystem';
import { PhotoEditor } from '@robingenz/capacitor-photo-editor';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.page.html',
  styleUrls: ['./photo-editor.page.scss'],
})
export class PhotoEditorPage {
  public path: string | undefined;
  public base64String: string | undefined;

  private readonly GH_URL =
    'https://github.com/robingenz/capacitor-photo-editor';

  constructor() {}

  public async selectPhoto(): Promise<void> {
    const { path } = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
    });
    if (!path) {
      return;
    }
    this.path = path;
    await this.setBase64StringByPath(this.path);
  }

  public async editPhoto(): Promise<void> {
    if (!this.path) {
      return;
    }
    await PhotoEditor.editPhoto({ path: this.path });
    await this.setBase64StringByPath(this.path);
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  private async setBase64StringByPath(path: string): Promise<void> {
    const { data } = await Filesystem.readFile({
      path,
    });
    this.base64String = `data:image/png;base64,${data}`;
  }
}
