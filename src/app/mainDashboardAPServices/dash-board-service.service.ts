import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashBoardServiceService {
  constructor(private http: HttpClient) {}

  fetchDashBoardDetails(): Observable<any> {
    let apiUrl =
      'https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3';
    return this.http.get(apiUrl);
  }
}
