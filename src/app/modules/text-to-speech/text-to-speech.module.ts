import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TextToSpeechPage } from './pages';
import { TextToSpeechPageRoutingModule } from './text-to-speech-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextToSpeechPageRoutingModule,
  ],
  declarations: [TextToSpeechPage],
})
export class TextToSpeechPageModule {}
