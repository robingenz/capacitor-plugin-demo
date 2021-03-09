import { Injectable } from '@angular/core';
import { TextToSpeechPlugin, TTSOptions } from '@capacitor-community/text-to-speech';
import { Plugins } from '@capacitor/core';
const TextToSpeech: TextToSpeechPlugin = Plugins.TextToSpeech as TextToSpeechPlugin;

@Injectable({
  providedIn: 'root',
})
export class TextToSpeechService {
  constructor() {}

  public async speak(options: TTSOptions): Promise<void> {
    await TextToSpeech.speak(options);
  }

  public async stop(): Promise<void> {
    await TextToSpeech.stop();
  }

  public getSupportedLanguages(): Promise<{ languages: any }> {
    return TextToSpeech.getSupportedLanguages();
  }

  public getSupportedVoices(): Promise<{ voices: SpeechSynthesisVoice[] }> {
    return TextToSpeech.getSupportedVoices();
  }

  public async openInstall(): Promise<void> {
    await TextToSpeech.openInstall();
  }

  public async setPitchRate(options: { pitchRate: number }): Promise<void> {
    await TextToSpeech.setPitchRate(options);
  }

  public async setSpeechRate(options: { speechRate: number }): Promise<void> {
    await TextToSpeech.setSpeechRate(options);
  }
}
