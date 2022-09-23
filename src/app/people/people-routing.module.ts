import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PeopleListComponent
  },
  {
    path: ':id',
    component: PersonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
