import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule.forRoot()],
  declarations: [],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
})
export class SharedTestingModule {}
