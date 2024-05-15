import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BluetoothLowEnergyDeviceComponent } from './bluetooth-low-energy-device.component';

describe('BluetoothLowEnergyDeviceComponent', () => {
  let component: BluetoothLowEnergyDeviceComponent;
  let fixture: ComponentFixture<BluetoothLowEnergyDeviceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BluetoothLowEnergyDeviceComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(BluetoothLowEnergyDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
