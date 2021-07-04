import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { FirebaseAppPage } from './firebase-app.page';

describe('FirebaseAppPage', () => {
  let component: FirebaseAppPage;
  let fixture: ComponentFixture<FirebaseAppPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FirebaseAppPage],
        imports: [SharedTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(FirebaseAppPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
