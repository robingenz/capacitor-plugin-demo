import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Filesystem } from '@capacitor/filesystem';
import { FileCompressor } from '@capawesome-team/capacitor-file-compressor';
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-file-compressor',
  templateUrl: './file-compressor.page.html',
  styleUrls: ['./file-compressor.page.scss'],
})
export class FileCompressorPage {
  public formGroup = new UntypedFormGroup({
    mimeType: new UntypedFormControl('image/jpeg'),
    quality: new UntypedFormControl(0.6),
  });
  public fileBefore:
    | {
        path?: string;
        blob?: Blob;
        size?: number;
        mimeType?: string;
      }
    | undefined;
  public fileAfter:
    | {
        path?: string;
        blob?: Blob;
        size?: number;
        mimeType?: string;
      }
    | undefined;

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-plugins';

  constructor(private readonly domSanitizer: DomSanitizer) {}

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async pickFile(): Promise<void> {
    this.fileBefore = undefined;
    this.fileAfter = undefined;
    await Filesystem.requestPermissions();
    const { files } = await FilePicker.pickImages();
    const pickedFile = files[0];
    this.fileBefore = {
      path: pickedFile.path,
      blob: pickedFile.blob,
      size: pickedFile.size,
      mimeType: pickedFile.mimeType,
    };
  }

  public async compressFile(): Promise<void> {
    this.fileAfter = undefined;
    const { blob, path } = await FileCompressor.compressImage({
      blob: this.fileBefore?.blob,
      mimeType: this.formGroup.value.mimeType,
      path: this.fileBefore?.path,
      quality: this.formGroup.value.quality,
    });
    let size: number | undefined;
    if (path) {
      const statResult = await Filesystem.stat({ path });
      size = statResult.size;
    } else if (blob) {
      size = blob.size;
    }
    this.fileAfter = {
      path,
      blob,
      size,
      mimeType: this.formGroup.value.mimeType,
    };
  }
}
