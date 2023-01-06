import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Capacitor } from '@capacitor/core';
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
  });
  public files: PickedFile[] = [];

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-file-picker';

  constructor(private readonly domSanitizer: DomSanitizer) {}

  public async pickFile(): Promise<void> {
    const types = this.formGroup.get('types')?.value || [];
    const multiple = this.formGroup.get('multiple')?.value || false;
    const readData = this.formGroup.get('readData')?.value || false;
    const { files } = await FilePicker.pickFiles({ types, multiple, readData });
    this.files = files;
  }

  public async pickImages(): Promise<void> {
    const multiple = this.formGroup.get('multiple')?.value || false;
    const readData = this.formGroup.get('readData')?.value || false;
    const { files } = await FilePicker.pickImages({ multiple, readData });
    this.files = files;
  }

  public async pickMedia(): Promise<void> {
    const multiple = this.formGroup.get('multiple')?.value || false;
    const readData = this.formGroup.get('readData')?.value || false;
    const { files } = await FilePicker.pickMedia({ multiple, readData });
    this.files = files;
  }

  public async pickVideos(): Promise<void> {
    const multiple = this.formGroup.get('multiple')?.value || false;
    const readData = this.formGroup.get('readData')?.value || false;
    const { files } = await FilePicker.pickVideos({ multiple, readData });
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
