import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { File, FilePicker } from '@robingenz/capacitor-file-picker';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.page.html',
  styleUrls: ['./file-picker.page.scss'],
})
export class FilePickerPage {
  public formGroup = new FormGroup({
    types: new FormControl([]),
    multiple: new FormControl(false),
  });
  public files: File[] = [];

  private readonly GH_URL =
    'https://github.com/robingenz/capacitor-file-picker';

  constructor() {}

  public async pickFile(): Promise<void> {
    const types = this.formGroup.get('types')?.value || [];
    const multiple = this.formGroup.get('multiple')?.value || false;
    const { files } = await FilePicker.pickFiles({ types, multiple });
    this.files = files;
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
