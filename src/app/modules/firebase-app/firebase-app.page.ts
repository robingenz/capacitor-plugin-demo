import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@robingenz/capacitor-firebase-app';

@Component({
  selector: 'app-firebase-app',
  templateUrl: './firebase-app.page.html',
  styleUrls: ['./firebase-app.page.scss'],
})
export class FirebaseAppPage implements OnInit {
  public name = '';
  public apiKey = '';
  public applicationId = '';
  public databaseUrl = '';
  public gcmSenderId = '';
  public projectId = '';
  public storageBucket = '';

  private readonly GH_URL =
    'https://github.com/robingenz/capacitor-firebase-app';

  constructor() {}

  public ngOnInit(): void {
    FirebaseApp.getName().then(result => {
      this.name = result.name;
    });
    FirebaseApp.getOptions().then(result => {
      this.apiKey = result.apiKey;
      this.applicationId = result.applicationId;
      this.databaseUrl = result.databaseUrl;
      this.gcmSenderId = result.gcmSenderId;
      this.projectId = result.projectId;
      this.storageBucket = result.storageBucket;
    });
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
