import { PersonDetails } from './../models/person-details';
import { Results } from './../../shared/models/results';
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPeopleList(pageNumber: number): Observable<Results<PersonDetails>> {
    let params = new HttpParams();
    params = params.append('page', pageNumber);

    return this.http.get<Results<PersonDetails>>(`${this.baseUrl}/people/`, {
      params
    });
  }

  getPerson(id: string): Observable<PersonDetails> {
    return this.http.get<PersonDetails>(`${this.baseUrl}/people/${id}`);
  }
}
