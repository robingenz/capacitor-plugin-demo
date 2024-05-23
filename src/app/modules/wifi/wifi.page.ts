import { Component, NgZone, OnInit } from '@angular/core';
import { Wifi } from '@capawesome-team/capacitor-wifi';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.page.html',
  styleUrls: ['./wifi.page.scss'],
})
export class WifiPage implements OnInit {
  public ssid: string | undefined;
  public password: string | undefined;

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-plugins';

  constructor(private readonly ngZone: NgZone) {}

  public ngOnInit(): void {
    this.addListeners();
  }

  public async connect(): Promise<void> {
    if (!this.ssid) {
      return;
    }
    await Wifi.connect({
      ssid: this.ssid,
      password: this.password,
    });
  }

  public async disconnect(): Promise<void> {
    await Wifi.disconnect({
      ssid: this.ssid,
    });
  }

  public async getAvailableNetworks(): Promise<void> {
    await Wifi.getAvailableNetworks();
  }

  public async getIpAddress(): Promise<void> {
    await Wifi.getIpAddress();
  }

  public async getRssi(): Promise<void> {
    await Wifi.getRssi();
  }

  public async getSsid(): Promise<void> {
    await Wifi.getSsid();
  }

  public async isEnabled(): Promise<void> {
    await Wifi.isEnabled();
  }

  public async startScan(): Promise<void> {
    await Wifi.startScan();
  }

  public async checkPermissions(): Promise<void> {
    await Wifi.checkPermissions();
  }

  public async requestPermissions(): Promise<void> {
    await Wifi.requestPermissions();
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  private addListeners(): void {
    Wifi.removeAllListeners().then(() => {
      Wifi.addListener('networksScanned', event => {
        this.ngZone.run(() => {
          console.log('networksScanned', event);
        });
      });
    });
  }
}
