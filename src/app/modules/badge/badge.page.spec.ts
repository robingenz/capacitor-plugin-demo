import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { BadgePage } from './badge.page';

describe('BadgePage', () => {
  let component: BadgePage;
  let fixture: ComponentFixture<BadgePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BadgePage],
        imports: [SharedTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(BadgePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
