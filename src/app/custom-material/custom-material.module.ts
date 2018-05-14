import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
