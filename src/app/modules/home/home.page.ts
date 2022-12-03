import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public plugins = [
    {
      name: 'App Update',
      url: '/app-update',
    },
    {
      name: 'Android Battery Optimization',
      url: '/android-battery-optimization',
    },
    {
      name: 'Android Foreground Service',
      url: '/android-foreground-service',
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
      name: 'Cloudinary',
      url: '/cloudinary',
    },
    {
      name: 'Datetime Picker',
      url: '/datetime-picker',
    },
    {
      name: 'File Opener',
      url: '/file-opener',
    },
    {
      name: 'File Picker',
      url: '/file-picker',
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
      name: 'Photo Editor',
      url: '/photo-editor',
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
