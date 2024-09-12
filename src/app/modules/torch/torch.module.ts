import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { TorchPageRoutingModule } from './torch-routing.module';
import { TorchPage } from './torch.page';

@NgModule({
  imports: [SharedModule, TorchPageRoutingModule],
  declarations: [TorchPage],
})
export class TorchPageModule {}
