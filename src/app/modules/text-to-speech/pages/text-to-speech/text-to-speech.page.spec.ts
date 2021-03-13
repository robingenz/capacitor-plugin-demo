import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { TextToSpeechService } from '../../services';
import { TextToSpeechPage } from './text-to-speech.page';

describe('TextToSpeechPage', () => {
  let component: TextToSpeechPage;
  let fixture: ComponentFixture<TextToSpeechPage>;
  let textToSpeechServiceSpy: jasmine.SpyObj<TextToSpeechService>;

  beforeEach(async () => {
    textToSpeechServiceSpy = jasmine.createSpyObj<TextToSpeechService>(
      'TextToSpeechService',
      {
        speak: Promise.resolve(),
        stop: Promise.resolve(),
        getSupportedLanguages: Promise.resolve({ languages: [] }),
        getSupportedVoices: Promise.resolve({ voices: [] }),
        openInstall: Promise.resolve(),
        setPitchRate: Promise.resolve(),
        setSpeechRate: Promise.resolve(),
      },
    );

    TestBed.configureTestingModule({
      declarations: [TextToSpeechPage],
      imports: [SharedTestingModule],
      providers: [
        { provide: TextToSpeechService, useValue: textToSpeechServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TextToSpeechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
