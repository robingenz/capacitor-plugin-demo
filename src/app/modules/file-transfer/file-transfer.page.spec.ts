import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { FileTransferPage } from './file-transfer.page';

describe('FileTransferPage', () => {
  let component: FileTransferPage;
  let fixture: ComponentFixture<FileTransferPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FileTransferPage],
      imports: [SharedTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FileTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
