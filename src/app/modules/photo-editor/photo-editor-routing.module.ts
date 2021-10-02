import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoEditorPage } from './photo-editor.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoEditorPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoEditorPageRoutingModule {}
