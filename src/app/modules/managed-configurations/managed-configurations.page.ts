import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ManagedConfigurations } from '@robingenz/capacitor-managed-configurations';

@Component({
  selector: 'app-managed-configurations',
  templateUrl: './managed-configurations.page.html',
  styleUrls: ['./managed-configurations.page.scss'],
})
export class ManagedConfigurationsPage implements OnInit {
  public serverUrl = '';

  private readonly GH_URL =
    'https://github.com/robingenz/capacitor-managed-configurations';

  constructor(private readonly platform: Platform) {}

  public ngOnInit(): void {
    if (!this.platform.is('capacitor')) {
      return;
    }
    ManagedConfigurations.getString({ key: 'server_url' }).then(result => {
      this.serverUrl = result.value || '';
    });
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
