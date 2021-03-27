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
      name: 'Firebase Performance',
      url: '/firebase-performance',
    },
    {
      name: 'Privacy Screen',
      url: '/privacy-screen',
    },
    {
      name: 'Text To Speech',
      url: '/text-to-speech',
    },
  ];

  constructor() {}
}
