import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { TextToSpeechPage } from './text-to-speech.page';

describe('TextToSpeechPage', () => {
  let component: TextToSpeechPage;
  let fixture: ComponentFixture<TextToSpeechPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TextToSpeechPage],
      imports: [SharedTestingModule],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(TextToSpeechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
