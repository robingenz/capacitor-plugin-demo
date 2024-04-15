import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { LiveUpdatePage } from './live-update.page';

describe('LiveUpdatePage', () => {
  let component: LiveUpdatePage;
  let fixture: ComponentFixture<LiveUpdatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LiveUpdatePage],
      imports: [SharedTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LiveUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
