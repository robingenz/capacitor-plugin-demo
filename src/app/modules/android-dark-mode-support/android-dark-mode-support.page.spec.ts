import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AndroidDarkModeSupportPage } from './android-dark-mode-support.page';

describe('AndroidDarkModeSupportPage', () => {
  let component: AndroidDarkModeSupportPage;
  let fixture: ComponentFixture<AndroidDarkModeSupportPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidDarkModeSupportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AndroidDarkModeSupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
