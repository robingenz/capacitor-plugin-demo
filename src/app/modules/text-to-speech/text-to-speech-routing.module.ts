import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextToSpeechPage } from './pages';

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
