import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public plugins = [
    {
      name: 'Background Task',
      url: '/background-task',
    },
    {
      name: 'Badge',
      url: '/badge',
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

  constructor() { }
}
