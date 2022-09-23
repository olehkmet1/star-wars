import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from './material/material.module';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListViewComponent } from './components/list-view/list-view.component';



@NgModule({
  declarations: [
    DetailViewComponent,
    ListItemComponent,
    ListViewComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    InfiniteScrollModule,
    CommonModule,
    MaterialModule,
    DetailViewComponent,
    ListItemComponent,
    ListViewComponent
  ]
})
export class SharedModule { }
