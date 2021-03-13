import { TestBed } from '@angular/core/testing';
import { PrivacyScreenPlugin } from '@capacitor-community/privacy-screen';
import { Plugins } from '@capacitor/core';
import { PrivacyScreenService } from './privacy-screen.service';

describe('PrivacyScreenService', () => {
  let service: PrivacyScreenService;
  let originalPrivacyScreen: PrivacyScreenPlugin;

  beforeEach(() => {
    originalPrivacyScreen = Plugins.PrivacyScreen;
    Plugins.PrivacyScreen = jasmine.createSpyObj('PrivacyScreen', {
      enable: undefined,
      disable: undefined,
    });

    TestBed.configureTestingModule({});

    service = TestBed.inject(PrivacyScreenService);
  });

  afterEach(() => {
    Plugins.PrivacyScreen = originalPrivacyScreen;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should enable the privacy screen', () => {
    service.enable();
    expect(Plugins.PrivacyScreen.enable).toHaveBeenCalled();
  });

  xit('should disable the privacy screen', () => {
    service.disable();
    expect(Plugins.PrivacyScreen.disable).toHaveBeenCalled();
  });
});
