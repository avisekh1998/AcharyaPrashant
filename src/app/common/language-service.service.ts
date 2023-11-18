import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LanguageServiceService {
  languageBehaviour = new BehaviorSubject<string>('english');
  constructor() {}
}
