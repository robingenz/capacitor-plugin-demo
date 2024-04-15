import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LiveUpdatePage } from './live-update.page';

describe('LiveUpdatePage', () => {
  let component: LiveUpdatePage;
  let fixture: ComponentFixture<LiveUpdatePage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(LiveUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
