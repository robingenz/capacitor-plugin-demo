import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { PhotoEditorPageRoutingModule } from './photo-editor-routing.module';
import { PhotoEditorPage } from './photo-editor.page';

@NgModule({
  imports: [SharedModule, PhotoEditorPageRoutingModule],
  declarations: [PhotoEditorPage],
})
export class PhotoEditorPageModule {}
