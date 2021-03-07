import { Injectable } from '@angular/core';
import '@capacitor-community/text-to-speech';
import { TTSOptions } from '@capacitor-community/text-to-speech';
import { Plugins } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class TextToSpeechService {
  constructor() {}

  public async speak(options: TTSOptions): Promise<void> {
    await Plugins.TextToSpeech.speak(options);
  }

  public async stop(): Promise<void> {
    await Plugins.TextToSpeech.stop();
  }

  public getSupportedLanguages(): Promise<{ languages: any }> {
    return Plugins.TextToSpeech.getSupportedLanguages();
  }

  public getSupportedVoices(): Promise<{ voices: SpeechSynthesisVoice[] }> {
    return Plugins.TextToSpeech.getSupportedVoices();
  }

  public async openInstall(): Promise<void> {
    await Plugins.TextToSpeech.openInstall();
  }

  public async setPitchRate(options: { pitchRate: number }): Promise<void> {
    await Plugins.TextToSpeech.setPitchRate(options);
  }

  public async setSpeechRate(options: { speechRate: number }): Promise<void> {
    await Plugins.TextToSpeech.setSpeechRate(options);
  }
}
