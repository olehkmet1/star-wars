import { NgModule } from '@angular/core';
import { PeopleRoutingModule } from './people-routing.module';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    PeopleListComponent,
    PersonDetailComponent
  ],
  imports: [
    PeopleRoutingModule,
    SharedModule
  ]
})
export class PeopleModule { }
