import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    MatProgressSpinnerModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
