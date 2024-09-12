import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { TorchPage } from './torch.page';

describe('TorchPage', () => {
  let component: TorchPage;
  let fixture: ComponentFixture<TorchPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TorchPage],
      imports: [SharedTestingModule],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(TorchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
