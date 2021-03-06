import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [],
  providers: [
    { provide: NavController, useValue: {} },
    { provide: Router, useValue: {} },
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
})
export class SharedTestingModule {}
