import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DialogService } from '@app/core';
import { BarcodeScanner } from '@capawesome-team/capacitor-barcode-scanner';
import { BarcodeScannerModalComponent } from './barcode-scanner-modal.component';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.page.html',
  styleUrls: ['./barcode-scanner.page.scss'],
})
export class BarcodeScannerPage {
  public formGroup = new UntypedFormGroup({
    value: new UntypedFormControl(''),
  });

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-barcode-scanner';

  constructor(private readonly dialogService: DialogService) {}

  public async startScan(): Promise<void> {
    const element = await this.dialogService.showModal({
      component: BarcodeScannerModalComponent,
      // Set `visibility` to `visible` to show the modal
      cssClass: 'barcode-scanner-modal',
      showBackdrop: false,
    });
    element.onDidDismiss().then(result => {
      const value = result.data?.value || '';
      this.formGroup.get('value')?.setValue(value);
    });
  }

  public async scan(): Promise<void> {
    const { barcode } = await BarcodeScanner.scan();
    this.formGroup.get('value')?.setValue(barcode.value);
  }

  public async requestPermissions(): Promise<void> {
    await BarcodeScanner.requestPermissions();
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
