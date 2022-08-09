import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import {
  DatetimePicker,
  PresentOptions,
} from '@capawesome/capacitor-datetime-picker';

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.page.html',
  styleUrls: ['./datetime-picker.page.scss'],
})
export class DatetimePickerPage {
  public formGroup = new UntypedFormGroup({
    value: new UntypedFormControl(''),
    mode: new UntypedFormControl('datetime'),
    format: new UntypedFormControl("yyyy-MM-dd'T'HH:mm:ss.sss'Z'"),
    min: new UntypedFormControl(''),
    max: new UntypedFormControl(''),
  });

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-datetime-picker';

  constructor() {}

  public async present(): Promise<void> {
    const value = this.formGroup.value.value;
    const mode = this.formGroup.value.mode;
    const format = this.formGroup.value.format;
    const min = this.formGroup.value.min;
    const max = this.formGroup.value.max;
    const options: PresentOptions = {};
    if (value) {
      options.value = value;
    }
    if (mode) {
      options.mode = mode;
    }
    if (format) {
      options.format = format;
    }
    if (min) {
      options.min = min;
    }
    if (max) {
      options.max = max;
    }
    const result = await DatetimePicker.present(options);
    this.formGroup.patchValue({ value: result.value });
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
