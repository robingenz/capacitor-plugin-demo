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
    const { base64String, path } = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
    });
    if (!base64String || !path) {
      return;
    }
    this.path = path;
    this.base64String = this.createImgSrcDataString(base64String);
  }

  public async editPhoto(): Promise<void> {
    if (!this.path) {
      return;
    }
    await PhotoEditor.editPhoto({ path: this.path });
    const { data } = await Filesystem.readFile({
      path: this.path,
    });
    this.base64String = this.createImgSrcDataString(data);
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  private createImgSrcDataString(base64: string): string {
    return `data:image/png;base64,${base64}`;
  }
}
