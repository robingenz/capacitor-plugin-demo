import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { AppUpdatePage } from './app-update.page';

describe('AppUpdatePage', () => {
  let component: AppUpdatePage;
  let fixture: ComponentFixture<AppUpdatePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppUpdatePage],
        imports: [SharedTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(AppUpdatePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
