import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AndroidBatteryOptimizationPage } from './android-battery-optimization.page';

describe('AndroidBatteryOptimizationPage', () => {
  let component: AndroidBatteryOptimizationPage;
  let fixture: ComponentFixture<AndroidBatteryOptimizationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AndroidBatteryOptimizationPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AndroidBatteryOptimizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
