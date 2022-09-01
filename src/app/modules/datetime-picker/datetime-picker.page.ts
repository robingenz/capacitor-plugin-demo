import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  DatetimePicker,
  PresentOptions,
} from '@capawesome-team/capacitor-datetime-picker';

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.page.html',
  styleUrls: ['./datetime-picker.page.scss'],
})
export class DatetimePickerPage {
  public formGroup = new FormGroup({
    value: new FormControl(''),
    mode: new FormControl<'datetime' | 'date' | 'time' | undefined>('datetime'),
    theme: new FormControl<'auto' | 'light' | 'dark' | undefined>('auto'),
    format: new FormControl("yyyy-MM-dd'T'HH:mm:ss.sss'Z'"),
    locale: new FormControl('en-US'),
    min: new FormControl(''),
    max: new FormControl(''),
    cancelButtonText: new FormControl('Cancel'),
    doneButtonText: new FormControl('Ok'),
  });

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-datetime-picker';

  constructor() {}

  public async present(): Promise<void> {
    const value = this.formGroup.value.value;
    const mode = this.formGroup.value.mode;
    const theme = this.formGroup.value.theme;
    const format = this.formGroup.value.format;
    const locale = this.formGroup.value.locale;
    const min = this.formGroup.value.min;
    const max = this.formGroup.value.max;
    const cancelButtonText = this.formGroup.value.cancelButtonText;
    const doneButtonText = this.formGroup.value.doneButtonText;
    const options: PresentOptions = {};
    if (value && value.length > 0) {
      options.value = value;
    }
    if (mode) {
      options.mode = mode;
    }
    if (theme) {
      options.theme = theme;
    }
    if (format) {
      options.format = format;
    }
    if (locale) {
      options.locale = locale;
    }
    if (min && min.length > 0) {
      options.min = min;
    }
    if (max && max.length > 0) {
      options.max = max;
    }
    if (cancelButtonText && cancelButtonText.length > 0) {
      options.cancelButtonText = cancelButtonText;
    }
    if (doneButtonText && doneButtonText.length > 0) {
      options.doneButtonText = doneButtonText;
    }
    const result = await DatetimePicker.present(options);
    this.formGroup.patchValue({ value: result.value });
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
