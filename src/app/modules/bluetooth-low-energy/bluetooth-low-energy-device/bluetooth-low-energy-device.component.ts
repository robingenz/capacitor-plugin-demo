import { Component, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { DialogService } from '@app/core';
import { PluginListenerHandle } from '@capacitor/core';
import {
  BluetoothLowEnergy,
  ConnectionPriority,
  DeviceScannedEvent,
} from '@capawesome-team/capacitor-bluetooth-low-energy';

@Component({
  selector: 'app-bluetooth-low-energy-device',
  templateUrl: './bluetooth-low-energy-device.component.html',
  styleUrls: ['./bluetooth-low-energy-device.component.scss'],
})
export class BluetoothLowEnergyDeviceComponent implements OnInit, OnDestroy {
  @Input()
  public device: DeviceScannedEvent | undefined;

  private characteristicChangedListener:
    | Promise<PluginListenerHandle>
    | undefined;
  private deviceDisconnectedListener: Promise<PluginListenerHandle> | undefined;

  constructor(
    private readonly dialogService: DialogService,
    private readonly ngZone: NgZone,
  ) {}

  public ngOnInit(): void {
    this.addListeners();
  }

  public ngOnDestroy(): void {
    this.removeListeners();
  }

  public async closeModal(): Promise<void> {
    await this.dialogService.dismissModal();
  }

  public async connect(): Promise<void> {
    if (!this.device) {
      return;
    }
    await BluetoothLowEnergy.connect({
      deviceId: this.device.id,
    });
  }

  public async createBond(): Promise<void> {
    if (!this.device) {
      return;
    }
    await BluetoothLowEnergy.createBond({
      deviceId: this.device.id,
    });
  }

  public async disconnect(): Promise<void> {
    if (!this.device) {
      return;
    }
    await BluetoothLowEnergy.disconnect({
      deviceId: this.device.id,
    });
  }

  public async discoverServices(): Promise<void> {
    if (!this.device) {
      return;
    }
    await BluetoothLowEnergy.discoverServices({
      deviceId: this.device.id,
    });
  }

  public async getServices(): Promise<void> {
    if (!this.device) {
      return;
    }
    await BluetoothLowEnergy.getServices({
      deviceId: this.device.id,
    });
  }

  public async isBonded(): Promise<void> {
    if (!this.device) {
      return;
    }
    await BluetoothLowEnergy.isBonded({
      deviceId: this.device.id,
    });
  }

  public async readCharacteristic(): Promise<void> {
    if (!this.device) {
      return;
    }
    await BluetoothLowEnergy.readCharacteristic({
      characteristicId: '0783b03e-8535-b5a0-7140-a304d2495cba', // Custom Characteristic
      deviceId: this.device.id,
      serviceId: '0000fff0-0000-1000-8000-00805f9b34fb', // Custom Service
    });
  }

  public async readRssi(): Promise<void> {
    if (!this.device) {
      return;
    }
    await BluetoothLowEnergy.readRssi({
      deviceId: this.device.id,
    });
  }

  public async requestConnectionPriority(): Promise<void> {
    if (!this.device) {
      return;
    }
    await BluetoothLowEnergy.requestConnectionPriority({
      connectionPriority: ConnectionPriority.HIGH,
      deviceId: this.device.id,
    });
  }

  public async requestMtu(): Promise<void> {
    if (!this.device) {
      return;
    }
    await BluetoothLowEnergy.requestMtu({
      deviceId: this.device.id,
      mtu: 512,
    });
  }

  public async startCharacteristicNotifications(): Promise<void> {
    if (!this.device) {
      return;
    }
    await BluetoothLowEnergy.startCharacteristicNotifications({
      characteristicId: '0783b03e-8535-b5a0-7140-a304d2495cb8', // Custom Characteristic
      deviceId: this.device.id,
      serviceId: '0000fff0-0000-1000-8000-00805f9b34fb', // Custom Service
    });
  }

  public async stopCharacteristicNotifications(): Promise<void> {
    if (!this.device) {
      return;
    }
    await BluetoothLowEnergy.stopCharacteristicNotifications({
      characteristicId: '0783b03e-8535-b5a0-7140-a304d2495cb8', // Custom Characteristic
      deviceId: this.device.id,
      serviceId: '0000fff0-0000-1000-8000-00805f9b34fb', // Custom Service
    });
  }

  public async writeCharacteristic(): Promise<void> {
    if (!this.device) {
      return;
    }
    // Not yet implemented
  }

  private addListeners(): void {
    this.characteristicChangedListener = BluetoothLowEnergy.addListener(
      'characteristicChanged',
      event => {
        this.ngZone.run(() => {
          console.log('Characteristic changed', event);
        });
      },
    );
    this.deviceDisconnectedListener = BluetoothLowEnergy.addListener(
      'deviceDisconnected',
      event => {
        this.ngZone.run(() => {
          console.log('Device disconnected', event);
        });
      },
    );
  }

  private removeListeners(): void {
    if (this.characteristicChangedListener) {
      this.characteristicChangedListener.then(listener => listener.remove());
    }
    if (this.deviceDisconnectedListener) {
      this.deviceDisconnectedListener.then(listener => listener.remove());
    }
  }
}
