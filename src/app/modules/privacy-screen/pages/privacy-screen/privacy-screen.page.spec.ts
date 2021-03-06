import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { PrivacyScreenPage } from './privacy-screen.page';

describe('PrivacyScreenPage', () => {
  let component: PrivacyScreenPage;
  let fixture: ComponentFixture<PrivacyScreenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivacyScreenPage],
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
});
