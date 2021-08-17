import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { ManagedConfigurationsPage } from './managed-configurations.page';

describe('ManagedConfigurationsPage', () => {
  let component: ManagedConfigurationsPage;
  let fixture: ComponentFixture<ManagedConfigurationsPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ManagedConfigurationsPage],
        imports: [SharedTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(ManagedConfigurationsPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
