import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private readonly router: Router) {}

  public navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
