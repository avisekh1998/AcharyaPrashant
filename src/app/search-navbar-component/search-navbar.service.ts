import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchNavbarService {
  constructor(private http: HttpClient) {}

  fetchSearchNavbarData(): Observable<any> {
    let apiUrl = 'https://api.acharyaprashant.org/v2/legacy/courses/tags';
    return this.http.get(apiUrl);
    {
    }
  }
}
