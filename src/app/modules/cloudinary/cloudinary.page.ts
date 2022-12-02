import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DialogService } from '@app/core';
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
      const { publicId, resourceType, url } = await Cloudinary.uploadResource({
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
}
