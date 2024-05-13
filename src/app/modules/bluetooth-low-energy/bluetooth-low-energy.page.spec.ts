import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { BluetoothLowEnergyPage } from './bluetooth-low-energy.page';

describe('BluetoothLowEnergyPage', () => {
  let component: BluetoothLowEnergyPage;
  let fixture: ComponentFixture<BluetoothLowEnergyPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BluetoothLowEnergyPage],
      imports: [SharedTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BluetoothLowEnergyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
