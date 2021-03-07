import { Component } from '@angular/core';
import { TextToSpeechService } from '../../services';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.page.html',
  styleUrls: ['./text-to-speech.page.scss'],
})
export class TextToSpeechPage {
  private readonly GH_URL =
    'https://github.com/capacitor-community/text-to-speech';

  constructor(private readonly textToSpeechService: TextToSpeechService) {}

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }
}
