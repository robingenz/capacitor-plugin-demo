import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { FirebaseCrashlyticsPage } from './firebase-crashlytics.page';

describe('FirebaseCrashlyticsPage', () => {
  let component: FirebaseCrashlyticsPage;
  let fixture: ComponentFixture<FirebaseCrashlyticsPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FirebaseCrashlyticsPage],
        imports: [SharedTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(FirebaseCrashlyticsPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
