import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { TextToSpeechPageRoutingModule } from './text-to-speech-routing.module';
import { TextToSpeechPage } from './text-to-speech.page';

@NgModule({
  imports: [SharedModule, TextToSpeechPageRoutingModule],
  declarations: [TextToSpeechPage],
})
export class TextToSpeechPageModule {}
