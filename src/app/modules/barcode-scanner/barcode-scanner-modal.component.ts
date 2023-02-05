import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
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
      <div #square class="square"></div>
      <ion-fab slot="fixed" horizontal="end" vertical="bottom">
        <ion-fab-button (click)="toggleTorch()">
          <ion-icon name="flashlight"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  `,
  styles: [
    `
      ion-content {
        --background: transparent;
      }

      .square {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 12px;
        width: 250px;
        height: 250px;
        border: 12px solid white;
      }
    `,
  ],
})
export class BarcodeScannerModalComponent implements OnInit, OnDestroy {
  @ViewChild('square')
  public squareElement: ElementRef<HTMLDivElement> | undefined;

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

  public async toggleTorch(): Promise<void> {
    // console.log(this.squareElement?.nativeElement.getBoundingClientRect());
    await BarcodeScanner.toggleTorch();
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
