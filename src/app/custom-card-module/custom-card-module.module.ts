import { CustomCardComponent } from './../custom-card/custom-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CustomCardComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomCardComponent]
})
export class CustomCardModuleModule { }
