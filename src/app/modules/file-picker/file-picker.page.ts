import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { File, FilePicker } from '@capawesome/capacitor-file-picker';

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
  public files: File[] = [];

  private readonly GH_URL =
    'https://github.com/robingenz/capacitor-file-picker';

  constructor() {}

  public async pickFile(): Promise<void> {
    const types = this.formGroup.get('types')?.value || [];
    const multiple = this.formGroup.get('multiple')?.value || false;
    const readData = this.formGroup.get('readData')?.value || false;
    const { files } = await FilePicker.pickFiles({ types, multiple, readData });
    this.files = files;
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
