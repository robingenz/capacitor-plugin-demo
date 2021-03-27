import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { FirebasePerformancePage } from './firebase-performance.page';

describe('FirebasePerformancePage', () => {
  let component: FirebasePerformancePage;
  let fixture: ComponentFixture<FirebasePerformancePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FirebasePerformancePage],
        imports: [SharedTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(FirebasePerformancePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
