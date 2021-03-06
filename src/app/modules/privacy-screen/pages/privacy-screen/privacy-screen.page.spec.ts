import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { PrivacyScreenService } from '../../services';
import { PrivacyScreenPage } from './privacy-screen.page';

describe('PrivacyScreenPage', () => {
  let component: PrivacyScreenPage;
  let fixture: ComponentFixture<PrivacyScreenPage>;
  let privacyScreenServiceSpy: jasmine.SpyObj<PrivacyScreenService>;

  beforeEach(async () => {
    privacyScreenServiceSpy = jasmine.createSpyObj<PrivacyScreenService>(
      'PrivacyScreenService',
      {
        enable: undefined,
        disable: undefined,
      },
    );

    await TestBed.configureTestingModule({
      declarations: [PrivacyScreenPage],
      providers: [
        { provide: PrivacyScreenService, useValue: privacyScreenServiceSpy },
      ],
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

  it('should enable the privacy screen', () => {
    component.enable();
    expect(privacyScreenServiceSpy.enable).toHaveBeenCalled();
  });

  it('should disable the privacy screen', () => {
    component.disable();
    expect(privacyScreenServiceSpy.disable).toHaveBeenCalled();
  });
});
