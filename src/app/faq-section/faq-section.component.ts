import { Component, OnInit } from '@angular/core';
import { FaqServiceService } from './faq-service.service';
import { LanguageServiceService } from '../common/language-service.service';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.css'],
})
export class FaqSectionComponent implements OnInit {
  faqArray: Array<any> = [];

  constructor(
    private faqService: FaqServiceService,
    private languageService: LanguageServiceService
  ) {}

  ngOnInit(): void {
    this.languageService.languageBehaviour.subscribe((data) => {
      if (data) {
        let lang;
        if (data == 'english') {
          lang = 'english';
        }
        if (data == 'hindi') {
          lang = 'hindi';
        }
        this.fetchFAQ(lang);
      }
    });
  }

  toggleIndex = false;

  prevIndex = -1;
  toggleAccordion(index: any) {
    let elemArray = <HTMLCollection>(
      document.getElementById('accordion')?.getElementsByTagName('li')
    );

    if (this.prevIndex == index) {
      for (let i = 0; i < elemArray.length; i++) {
        let element = elemArray[i].getElementsByClassName('content')[0];
        this.toggleIndex = !this.toggleIndex;
        if (this.toggleIndex) {
          element.classList.add('content-open');
          element.classList.remove('content-close');
        }
        if (!this.toggleIndex) {
          element.classList.remove('content-open');
          element.classList.add('content-close');
        }
        break;
      }
    } else {
      for (let i = 0; i < elemArray.length; i++) {
        let element = elemArray[i].getElementsByClassName('content')[0];
        if (i == index) {
          element.classList.add('content-open');
          element.classList.remove('content-close');
          // if (this.toggleIndex == index) {
          // element.classList.remove('content-open');
          // element.classList.add('content-close');
          // }
        } else {
          element.classList.remove('content-open');
          element.classList.add('content-close');
        }
      }
    }
    if (this.prevIndex == -1) {
      this.toggleIndex = !this.toggleIndex;
    }
    this.prevIndex = index;
  }

  fetchFAQ(lang: any) {
    this.faqService.fetchFaqSectionData(lang).subscribe(
      (response) => {
        if (response) {
          console.log(response);
          this.faqArray = response;

          for (let i = 0; i < this.faqArray.length; i++) {
            this.faqArray[i].question =
              this.faqArray[i].question +
              `  <i class="fa-solid fa-caret-down"></i>`;
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
