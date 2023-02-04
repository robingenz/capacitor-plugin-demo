import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService } from '@app/core';
import { BarcodeScanner } from '@capawesome-team/capacitor-barcode-scanner';

@Component({
  selector: 'app-barcode-scanner',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Scanning</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="closeModal()">
            <ion-icon name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div>Test</div>
    </ion-content>
  `,
  styles: [
    `
      ion-content {
        --background: transparent;
      }
    `,
  ],
})
export class BarcodeScannerModalComponent implements OnInit, OnDestroy {
  constructor(private readonly dialogService: DialogService) {}

  public ngOnInit(): void {
    this.startScan();
  }

  public ngOnDestroy(): void {
    this.stopScan();
  }

  public async closeModal(scannedText?: string): Promise<void> {
    this.dialogService.dismissModal({
      value: scannedText,
    });
  }

  private async startScan(): Promise<void> {
    // Hide everything behind the modal
    document.querySelector('body')?.classList.add('barcode-scanner-active');

    const listener = await BarcodeScanner.addListener(
      'barcodeScanned',
      async result => {
        await listener.remove();
        this.closeModal(result.barcode.value);
      },
    );
    await BarcodeScanner.startScan();
  }

  private async stopScan(): Promise<void> {
    // Show everything behind the modal
    document.querySelector('body')?.classList.remove('barcode-scanner-active');

    await BarcodeScanner.stopScan();
  }
}
