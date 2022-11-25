import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AndroidForegroundServicePage } from './android-foreground-service.page';

describe('AndroidForegroundServicePage', () => {
  let component: AndroidForegroundServicePage;
  let fixture: ComponentFixture<AndroidForegroundServicePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AndroidForegroundServicePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AndroidForegroundServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
