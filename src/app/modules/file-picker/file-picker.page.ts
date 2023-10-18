import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Capacitor } from '@capacitor/core';
import { Filesystem } from '@capacitor/filesystem';
import { FilePicker, PickedFile } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.page.html',
  styleUrls: ['./file-picker.page.scss'],
})
export class FilePickerPage {
  public formGroup = new UntypedFormGroup({
    types: new UntypedFormControl([]),
    multiple: new UntypedFormControl(false),
    readData: new UntypedFormControl(false),
    skipTranscoding: new UntypedFormControl(false),
  });
  public files: PickedFile[] = [];

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-file-picker';

  constructor(private readonly domSanitizer: DomSanitizer) {}

  public async pickDirectory(): Promise<void> {
    await Filesystem.requestPermissions();
    const { path } = await FilePicker.pickDirectory();
    const { files } = await Filesystem.readdir({ path });
    this.files = files.map(file => {
      return {
        name: file.name,
        path: file.uri,
        mimeType: file.type,
        size: file.size,
      };
    });
  }

  public async pickFiles(): Promise<void> {
    const types = this.formGroup.get('types')?.value || [];
    const multiple = this.formGroup.get('multiple')?.value || false;
    const readData = this.formGroup.get('readData')?.value || false;
    const { files } = await FilePicker.pickFiles({ types, multiple, readData });
    this.files = files;
  }

  public async pickImages(): Promise<void> {
    const multiple = this.formGroup.get('multiple')?.value || false;
    const readData = this.formGroup.get('readData')?.value || false;
    const skipTranscoding =
      this.formGroup.get('skipTranscoding')?.value || false;
    const { files } = await FilePicker.pickImages({
      multiple,
      readData,
      skipTranscoding,
    });
    this.files = files;
  }

  public async pickMedia(): Promise<void> {
    const multiple = this.formGroup.get('multiple')?.value || false;
    const readData = this.formGroup.get('readData')?.value || false;
    const skipTranscoding =
      this.formGroup.get('skipTranscoding')?.value || false;
    const { files } = await FilePicker.pickMedia({
      multiple,
      readData,
      skipTranscoding,
    });
    this.files = files;
  }

  public async pickVideos(): Promise<void> {
    const multiple = this.formGroup.get('multiple')?.value || false;
    const readData = this.formGroup.get('readData')?.value || false;
    const skipTranscoding =
      this.formGroup.get('skipTranscoding')?.value || false;
    const { files } = await FilePicker.pickVideos({
      multiple,
      readData,
      skipTranscoding,
    });
    this.files = files;
  }

  public convertPathToWebPath(path: string): SafeUrl {
    const fileSrc = Capacitor.convertFileSrc(path);
    return this.domSanitizer.bypassSecurityTrustUrl(fileSrc);
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
