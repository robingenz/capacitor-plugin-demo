import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DatetimePicker } from '@capawesome/capacitor-datetime-picker';

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
    await DatetimePicker.present({
      value: this.formGroup.value.value,
      mode: this.formGroup.value.mode,
      format: this.formGroup.value.format,
      min: this.formGroup.value.min,
      max: this.formGroup.value.max,
    });
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
