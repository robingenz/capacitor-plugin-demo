import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Capacitor } from '@capacitor/core';

@Pipe({ name: 'fileSource' })
export class FileSourcePipe implements PipeTransform {
  constructor(private readonly domSanitizer: DomSanitizer) {}

  public transform(value: string | Blob): SafeUrl | string {
    if (typeof value === 'string') {
      const fileSrc = Capacitor.convertFileSrc(value);
      return this.domSanitizer.bypassSecurityTrustUrl(fileSrc);
    } else {
      return URL.createObjectURL(value);
    }
  }
}
