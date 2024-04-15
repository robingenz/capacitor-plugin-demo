import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DialogService } from '@app/core';
import { LiveUpdate } from '@capawesome/capacitor-live-update';
import { AlertInput } from '@ionic/angular';

@Component({
  selector: 'app-live-update',
  templateUrl: './live-update.page.html',
  styleUrls: ['./live-update.page.scss'],
})
export class LiveUpdatePage {
  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-plugins';
  public formGroup = new UntypedFormGroup({
    bundleId: new UntypedFormControl(''),
    channel: new UntypedFormControl(null),
    downloadUrl: new UntypedFormControl(''),
    customId: new UntypedFormControl(null),
  });

  constructor(private readonly dialogService: DialogService) {}

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async deleteBundle(): Promise<void> {
    const bundleId = this.formGroup.get('bundleId')?.value;
    if (!bundleId) {
      return;
    }
    await LiveUpdate.deleteBundle({ bundleId });
  }

  public async downloadBundle(): Promise<void> {
    const bundleId = this.formGroup.get('bundleId')?.value;
    const downloadUrl = this.formGroup.get('downloadUrl')?.value;
    if (!bundleId || !downloadUrl) {
      return;
    }
    await LiveUpdate.downloadBundle({
      url: downloadUrl,
      bundleId,
    });
  }

  public async getBundle(): Promise<void> {
    await LiveUpdate.getBundle();
  }

  public async getBundles(): Promise<void> {
    await LiveUpdate.getBundles();
  }

  public async getChannel(): Promise<void> {
    await LiveUpdate.getChannel();
  }

  public async getCustomId(): Promise<void> {
    await LiveUpdate.getCustomId();
  }

  public async getDeviceId(): Promise<void> {
    await LiveUpdate.getDeviceId();
  }

  public async getVersionCode(): Promise<void> {
    await LiveUpdate.getVersionCode();
  }

  public async getVersionName(): Promise<void> {
    await LiveUpdate.getVersionName();
  }

  public async ready(): Promise<void> {
    await LiveUpdate.ready();
  }

  public async reload(): Promise<void> {
    await LiveUpdate.reload();
  }

  public async reset(): Promise<void> {
    await LiveUpdate.reset();
  }

  public async setBundle(): Promise<void> {
    const bundleId = this.formGroup.get('bundleId')?.value;
    if (!bundleId) {
      return;
    }
    await LiveUpdate.setBundle({ bundleId });
  }

  public async setChannel(): Promise<void> {
    const channel = this.formGroup.get('channel')?.value;
    await LiveUpdate.setChannel({ channel: channel || null });
  }

  public async setCustomId(): Promise<void> {
    const customId = this.formGroup.get('customId')?.value;
    if (!customId) {
      return;
    }
    await LiveUpdate.setCustomId({ customId });
  }

  public async sync(): Promise<void> {
    await LiveUpdate.sync();
  }

  public async openSelectBundleAlert(): Promise<void> {
    const result = await LiveUpdate.getBundles();
    const alertInputs: AlertInput[] = [];
    for (const bundleId of result.bundleIds) {
      alertInputs.push({
        type: 'radio',
        label: bundleId,
        value: bundleId,
      });
    }
    const alertElement = await this.dialogService.showAlert({
      header: 'Select Bundle',
      message: 'Please select a bundle.',
      inputs: alertInputs,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Select',
        },
      ],
    });
    alertElement.onDidDismiss().then(async data => {
      if (data.role === 'cancel') {
        return;
      }
      if (!data.data) {
        return;
      }
      const bundleId = data.data.values;
      this.formGroup.get('bundleId')?.setValue(bundleId);
    });
  }
}
