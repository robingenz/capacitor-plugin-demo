import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TTSOptions } from '@capacitor-community/text-to-speech';
import { TextToSpeechService } from '../../services';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.page.html',
  styleUrls: ['./text-to-speech.page.scss'],
})
export class TextToSpeechPage implements OnInit {
  private readonly GH_URL =
    'https://github.com/capacitor-community/text-to-speech';
  public formGroup = new FormGroup({
    text: new FormControl(''),
    locale: new FormControl('en-US'),
    speechRate: new FormControl(1),
    pitchRate: new FormControl(1),
    volume: new FormControl(1),
    voice: new FormControl(1),
    category: new FormControl('ambient'),
  });
  private currentlySpeaking: boolean = false;

  constructor(private readonly textToSpeechService: TextToSpeechService) {}

  public ngOnInit(): void {
    this.textToSpeechService.getSupportedLanguages().then(languages => {
      console.log(languages);
    });
    this.textToSpeechService.getSupportedVoices().then(voices => {
      console.log(voices);
    });
  }

  public openOnGithub(): void {
    window.open(this.GH_URL, '_blank');
  }

  public async speak(): Promise<void> {
    const options: TTSOptions = {
      text: this.formGroup.get('text')?.value,
      locale: this.formGroup.get('locale')?.value,
      speechRate: this.formGroup.get('speechRate')?.value,
      pitchRate: this.formGroup.get('pitchRate')?.value,
      volume: this.formGroup.get('volume')?.value,
      // voice: this.formGroup.get('voice')?.value,
      category: this.formGroup.get('category')?.value,
    };
    this.currentlySpeaking = true;
    await this.textToSpeechService.speak(options).then(() => {
      this.currentlySpeaking = false;
    });
  }

  public async stop(): Promise<void> {
    await this.textToSpeechService.stop();
  }

  public async openInstall(): Promise<void> {
    await this.textToSpeechService.openInstall();
  }

  public async onPitchRateChange(event: CustomEvent): Promise<void> {
    if (!this.currentlySpeaking) {
      return;
    }
    const options = { pitchRate: event.detail.value };
    await this.textToSpeechService.setPitchRate(options);
  }

  public async onSpeechRateChange(event: CustomEvent): Promise<void> {
    if (!this.currentlySpeaking) {
      return;
    }
    const options = { speechRate: event.detail.value };
    await this.textToSpeechService.setSpeechRate(options);
  }
}
