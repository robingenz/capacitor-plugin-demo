import { Component } from '@angular/core';
import { Printer } from '@capawesome-team/capacitor-printer';
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.page.html',
  styleUrls: ['./printer.page.scss'],
})
export class PrinterPage {
  public name: string | undefined;
  public html: string | undefined =
    '<html><body><h1>Hello World</h1></body></html>';

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-plugins';

  constructor() {}

  public async printPdf(): Promise<void> {
    const result = await FilePicker.pickFiles({
      multiple: false,
      types: ['application/pdf'],
    });
    const file = result.files[0];
    await Printer.printPdf({ name: this.name, path: file.path || '' });
  }

  public async printHtml(): Promise<void> {
    await Printer.printHtml({ name: this.name, html: this.html || '' });
  }

  public async printWebView(): Promise<void> {
    await Printer.printWebView({ name: this.name });
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
