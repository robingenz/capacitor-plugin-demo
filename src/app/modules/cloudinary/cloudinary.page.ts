import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DialogService } from '@app/core';
import { FileOpener } from '@capawesome-team/capacitor-file-opener';
import { Cloudinary, ResourceType } from '@capawesome/capacitor-cloudinary';
import { File, FilePicker } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-cloudinary',
  templateUrl: './cloudinary.page.html',
  styleUrls: ['./cloudinary.page.scss'],
})
export class CloudinaryPage {
  public readonly resourceTypeImage = ResourceType.Image;
  public readonly resourceTypeVideo = ResourceType.Video;
  public readonly resourceTypeRaw = ResourceType.Raw;

  public formGroup = new UntypedFormGroup({
    cloudName: new UntypedFormControl(''),
    uploadPreset: new UntypedFormControl(''),
    publicId: new UntypedFormControl(undefined),
    resourceType: new UntypedFormControl(ResourceType.Image),
    url: new UntypedFormControl(undefined),
    height: new UntypedFormControl(undefined),
    width: new UntypedFormControl(undefined),
    bytes: new UntypedFormControl(undefined),
    duration: new UntypedFormControl(undefined),
  });
  public file: File | undefined;

  private readonly GH_URL =
    'https://github.com/capawesome-team/capacitor-cloudinary';

  constructor(private readonly dialogService: DialogService) {}

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async initialize(): Promise<void> {
    const cloudName = this.formGroup.get('cloudName')?.value || '';
    await Cloudinary.initialize({
      cloudName,
    });
  }

  public async selectFile(): Promise<void> {
    const { files } = await FilePicker.pickFiles({
      multiple: false,
      readData: false,
    });
    this.file = files[0];
  }

  public async uploadFile(): Promise<void> {
    this.formGroup.patchValue({ url: undefined });
    const blob = this.file?.blob;
    const path = this.file?.path;
    if (!blob && !path) {
      return;
    }
    const loadingElement = await this.dialogService.showLoading();
    try {
      const { publicId, resourceType, url, height, width, duration, bytes } =
        await Cloudinary.uploadResource({
          publicId: this.formGroup.get('publicId')?.value,
          uploadPreset: this.formGroup.get('uploadPreset')?.value,
          resourceType:
            this.formGroup.get('resourceType')?.value || ResourceType.Image,
          blob: blob,
          path: path,
        });
      this.formGroup.patchValue({ publicId: publicId });
      this.formGroup.patchValue({ resourceType: resourceType });
      this.formGroup.patchValue({ url: url });
      this.formGroup.patchValue({ height: height });
      this.formGroup.patchValue({ width: width });
      this.formGroup.patchValue({ duration: duration });
      this.formGroup.patchValue({ bytes: bytes });
    } finally {
      loadingElement.dismiss();
    }
  }

  public async downloadFile(): Promise<void> {
    const loadingElement = await this.dialogService.showLoading();
    const url = this.formGroup.get('url')?.value;
    if (!url) {
      return;
    }
    try {
      const { path, blob } = await Cloudinary.downloadResource({
        url,
      });
      if (blob) {
        this.downloadBlob(blob, url.split('/').pop() || 'file');
      } else if (path) {
        await FileOpener.openFile({
          path,
        });
      }
    } finally {
      loadingElement.dismiss();
    }
  }

  public openUrl(): any {
    const url = this.formGroup.get('url')?.value;
    if (!url) {
      return;
    }
    return window.open(url, '_blank');
  }

  private downloadBlob(blob: Blob, fileName: string): void {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
