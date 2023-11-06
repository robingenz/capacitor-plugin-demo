import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FileSizePipe, FileSourcePipe } from './pipes';

const MODULES = [CommonModule, FormsModule, ReactiveFormsModule, IonicModule];
const DECLARATIONS = [FileSizePipe, FileSourcePipe];

@NgModule({
  imports: [...MODULES],
  declarations: [...DECLARATIONS],
  exports: [...MODULES, ...DECLARATIONS],
})
export class SharedModule {}
