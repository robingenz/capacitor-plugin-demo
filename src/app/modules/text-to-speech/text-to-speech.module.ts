import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { TextToSpeechPage } from './pages';
import { TextToSpeechPageRoutingModule } from './text-to-speech-routing.module';

@NgModule({
  imports: [SharedModule, TextToSpeechPageRoutingModule],
  declarations: [TextToSpeechPage],
})
export class TextToSpeechPageModule {}
