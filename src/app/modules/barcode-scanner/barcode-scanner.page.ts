import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DialogService } from '@app/core';
import {
  Barcode,
  BarcodeScanner,
} from '@capawesome-team/capacitor-barcode-scanner';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { BarcodeScannerModalComponent } from './barcode-scanner-modal.component';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.page.html',
  styleUrls: ['./barcode-scanner.page.scss'],
})
export class BarcodeScannerPage {
  public formGroup = new UntypedFormGroup({
    bytes: new UntypedFormControl(''),
    cornerPoints: new UntypedFormControl(''),
    displayValue: new UntypedFormControl(''),
    format: new UntypedFormControl(''),
    rawValue: new UntypedFormControl(''),
    valueType: new UntypedFormControl(''),
  });

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-barcode-scanner';

  constructor(private readonly dialogService: DialogService) {}

  public async startScan(): Promise<void> {
    const element = await this.dialogService.showModal({
      component: BarcodeScannerModalComponent,
      // Set `visibility` to `visible` to show the modal (see `src/theme/variables.scss`)
      cssClass: 'barcode-scanner-modal',
      showBackdrop: false,
    });
    element.onDidDismiss().then(result => {
      const barcode: Barcode | undefined = result.data?.barcode;
      if (barcode) {
        this.updateFormGroupValues(barcode);
      }
    });
  }

  public async scan(): Promise<void> {
    const { barcodes } = await BarcodeScanner.scan();
    const barcode = barcodes[0];
    if (!barcode) {
      return;
    }
    this.updateFormGroupValues(barcode);
  }

  public async readBarcodeFromImage(): Promise<void> {
    const { files } = await FilePicker.pickImages({ multiple: false });
    const path = files[0]?.path;
    if (!path) {
      return;
    }
    const { barcodes } = await BarcodeScanner.readBarcodesFromImage({
      path,
    });
    const barcode = barcodes[0];
    if (!barcode) {
      return;
    }
    this.updateFormGroupValues(barcode);
  }

  public async requestPermissions(): Promise<void> {
    await BarcodeScanner.requestPermissions();
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  private updateFormGroupValues(barcode: Barcode): void {
    this.formGroup.get('bytes')?.setValue((barcode.bytes || []).toString());
    this.formGroup
      .get('cornerPoints')
      ?.setValue(barcode.cornerPoints.toString());
    this.formGroup.get('displayValue')?.setValue(barcode.displayValue);
    this.formGroup.get('format')?.setValue(barcode.format);
    this.formGroup.get('rawValue')?.setValue(barcode.rawValue);
    this.formGroup.get('valueType')?.setValue(barcode.valueType);
  }
}
