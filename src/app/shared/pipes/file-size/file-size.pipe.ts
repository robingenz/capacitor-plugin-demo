import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fileSize' })
export class FileSizePipe implements PipeTransform {
  private readonly units: string[] = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

  public transform(bytes: number = 0): string {
    let unitIndex = 0;
    while (bytes >= 1024) {
      bytes /= 1024;
      unitIndex++;
    }
    const unit = this.units[unitIndex];
    return `${bytes.toFixed(2)} ${unit}`;
  }
}
