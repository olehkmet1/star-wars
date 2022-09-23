import { Component, OnInit } from '@angular/core';
import { PersonDetails } from '../../models/person-details';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  private page = 1;
  public count: number = 0;
  public peopleList: PersonDetails[] = [];
  public isLoading = false;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeopleList();
  }

  getPeopleList(): void {
    this.isLoading = true;
    this.peopleService.getPeopleList(this.page).subscribe(
      {
        next: (res) => {
          this.isLoading = false;
          this.count = res.count;
          this.peopleList = this.peopleList.concat(res.results);
        },
        error: (error) => {
          this.isLoading = false;
          console.log(error);
        }
      })
  }

  onScroll(): void {
    if (this.peopleList.length < this.count) {
      this.page += 1;
      this.getPeopleList();
    }
  }



}
