import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FaqServiceService {
  constructor(private http: HttpClient) {}

  fetchFaqSectionData(lang: any): Observable<any> {
    let apiUrl =
      'https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=' + lang;
    return this.http.get(apiUrl);
  }
}
