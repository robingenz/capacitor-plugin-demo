import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { PhotoEditorPage } from './photo-editor.page';

describe('PhotoEditorPage', () => {
  let component: PhotoEditorPage;
  let fixture: ComponentFixture<PhotoEditorPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PhotoEditorPage],
        imports: [SharedTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(PhotoEditorPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
