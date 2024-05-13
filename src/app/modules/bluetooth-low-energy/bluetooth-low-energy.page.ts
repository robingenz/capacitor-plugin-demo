import { Component, NgZone } from '@angular/core';
import { DialogService } from '@app/core';
import {
  BluetoothLowEnergy,
  DeviceScannedEvent,
} from '@capawesome-team/capacitor-bluetooth-low-energy';
import { BluetoothLowEnergyDeviceComponent } from './bluetooth-low-energy-device/bluetooth-low-energy-device.component';

@Component({
  selector: 'app-bluetooth-low-energy',
  templateUrl: './bluetooth-low-energy.page.html',
  styleUrls: ['./bluetooth-low-energy.page.scss'],
})
export class BluetoothLowEnergyPage {
  public devices: DeviceScannedEvent[] = [];

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-plugins';

  constructor(
    private readonly dialogService: DialogService,
    private readonly ngZone: NgZone,
  ) {
    this.addListeners();
  }

  public async checkPermissions(): Promise<void> {
    await BluetoothLowEnergy.checkPermissions();
  }

  public async getConnectedDevices(): Promise<void> {
    this.stopScan();
    const { devices } = await BluetoothLowEnergy.getConnectedDevices({
      serviceIds: [
        '0000180f-0000-1000-8000-00805f9b34fb', // Battery Service
        '00001800-0000-1000-8000-00805f9b34fb', // Generic Access
        '00001801-0000-1000-8000-00805f9b34fb', // Generic Attribute
        '0000fff0-0000-1000-8000-00805f9b34fb', // Custom Service
      ],
    });
    this.devices = devices;
  }

  public async initialize(): Promise<void> {
    await BluetoothLowEnergy.initialize();
  }

  public async isEnabled(): Promise<void> {
    await BluetoothLowEnergy.isEnabled();
  }

  public async openAppSettings(): Promise<void> {
    await BluetoothLowEnergy.openAppSettings();
  }

  public async openBluetoothSettings(): Promise<void> {
    await BluetoothLowEnergy.openBluetoothSettings();
  }

  public async openLocationSettings(): Promise<void> {
    await BluetoothLowEnergy.openLocationSettings();
  }

  public async requestPermissions(): Promise<void> {
    await BluetoothLowEnergy.requestPermissions();
  }

  public async startForegroundService(): Promise<void> {
    await BluetoothLowEnergy.startForegroundService({
      body: 'Foreground service started',
      id: 19876923,
      smallIcon: 'push_icon',
      title: 'Bluetooth Low Energy',
    });
  }

  public async startScan(): Promise<void> {
    this.devices = [];
    await BluetoothLowEnergy.startScan();
  }

  public async stopForegroundService(): Promise<void> {
    await BluetoothLowEnergy.stopForegroundService();
  }

  public async stopScan(): Promise<void> {
    await BluetoothLowEnergy.stopScan();
  }

  public async openDeviceModal(device: DeviceScannedEvent): Promise<void> {
    await this.dialogService.showModal({
      component: BluetoothLowEnergyDeviceComponent,
      componentProps: {
        device,
      },
    });
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  private addListeners(): void {
    BluetoothLowEnergy.addListener('deviceScanned', event => {
      this.ngZone.run(() => {
        this.devices.push(event);
      });
    });
  }
}
