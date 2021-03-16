import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextToSpeechPage } from './text-to-speech.page';

const routes: Routes = [
  {
    path: '',
    component: TextToSpeechPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextToSpeechPageRoutingModule {}
