import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { BackgroundTaskPage } from './background-task.page';

describe('BackgroundTaskPage', () => {
  let component: BackgroundTaskPage;
  let fixture: ComponentFixture<BackgroundTaskPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BackgroundTaskPage],
        imports: [SharedTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(BackgroundTaskPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
