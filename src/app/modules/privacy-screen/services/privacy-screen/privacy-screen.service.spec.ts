import { TestBed } from '@angular/core/testing';
import { PrivacyScreen } from '@capacitor-community/privacy-screen';
import { PrivacyScreenService } from './privacy-screen.service';

describe('PrivacyScreenService', () => {
  let service: PrivacyScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(PrivacyScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should enable the privacy screen', async () => {
    spyOn(PrivacyScreen, 'enable');
    await service.enable();
    expect(PrivacyScreen.enable).toHaveBeenCalled();
  });

  it('should disable the privacy screen', async () => {
    spyOn(PrivacyScreen, 'disable');
    await service.disable();
    expect(PrivacyScreen.disable).toHaveBeenCalled();
  });
});
