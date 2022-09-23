import { PersonDetails } from './../../models/person-details';
import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  private personId: string | null = this.route.snapshot.paramMap.get('id');
  public detailsList: string[] = [];
  public isLoading: boolean = false;

  constructor(private route: ActivatedRoute,
    private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPerson(this.personId);
  }

  getPerson(id: string | null): void {
    this.isLoading = true;
    this.peopleService.getPerson(id).subscribe(
      {
        next: (res) => {
          this.isLoading = false;
          this.populateDetails(res);
        },
        error: (error) => {
          this.isLoading = false;
          console.log(error);
        }
      }
    );
  }

  populateDetails(item: any): void {
    for (const [key, value] of Object.entries(item)) {
      this.detailsList.push(`${key.split("_").join(' ')}: ${value}`);
    }
  }

}
