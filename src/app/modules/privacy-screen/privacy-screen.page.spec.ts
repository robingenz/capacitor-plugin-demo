import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivacyScreen } from '@capacitor-community/privacy-screen';
import { SharedTestingModule } from '@tests/modules';
import { PrivacyScreenPage } from './privacy-screen.page';

describe('PrivacyScreenPage', () => {
  let component: PrivacyScreenPage;
  let fixture: ComponentFixture<PrivacyScreenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivacyScreenPage],
      providers: [],
      imports: [SharedTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.nativeElement.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should enable the privacy screen', async () => {
    spyOn(PrivacyScreen, 'enable');
    await component.enable();
    expect(PrivacyScreen.enable).toHaveBeenCalled();
  });

  xit('should disable the privacy screen', async () => {
    spyOn(PrivacyScreen, 'disable');
    await component.disable();
    expect(PrivacyScreen.disable).toHaveBeenCalled();
  });
});
