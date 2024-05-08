import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { ZipPage } from './zip.page';

describe('ZipPage', () => {
  let component: ZipPage;
  let fixture: ComponentFixture<ZipPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ZipPage],
      imports: [SharedTestingModule],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ZipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
