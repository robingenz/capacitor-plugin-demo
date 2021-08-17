import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public plugins = [
    {
      name: 'Android Dark Mode Support',
      url: '/android-dark-mode-support',
    },
    {
      name: 'App Update',
      url: '/app-update',
    },
    {
      name: 'Background Task',
      url: '/background-task',
    },
    {
      name: 'Badge',
      url: '/badge',
    },
    {
      name: 'Firebase App',
      url: '/firebase-app',
    },
    {
      name: 'Firebase Crashlytics',
      url: '/firebase-crashlytics',
    },
    {
      name: 'Firebase Performance',
      url: '/firebase-performance',
    },
    {
      name: 'Keep Awake',
      url: '/keep-awake',
    },
    {
      name: 'Managed Configuration',
      url: '/managed-configurations',
    },
    {
      name: 'Privacy Screen',
      url: '/privacy-screen',
    },
    {
      name: 'Screen Orientation',
      url: '/screen-orientation',
    },
    {
      name: 'Text To Speech',
      url: '/text-to-speech',
    },
  ];

  constructor() {}
}
