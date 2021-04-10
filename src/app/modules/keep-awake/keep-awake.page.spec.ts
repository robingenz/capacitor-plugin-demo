import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { KeepAwakePage } from './keep-awake.page';

describe('KeepAwakePage', () => {
  let component: KeepAwakePage;
  let fixture: ComponentFixture<KeepAwakePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [KeepAwakePage],
        imports: [SharedTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(KeepAwakePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
