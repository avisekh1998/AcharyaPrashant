import { Component, OnInit } from '@angular/core';
import { LanguageServiceService } from '../common/language-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private langService: LanguageServiceService) {}

  ngOnInit(): void {
    document.getElementsByClassName('overlay2')[0].classList.add('hidden');

    document.getElementsByClassName('responsiveCtr')[0].classList.add('hidden');
  }

  toggleNav = false;
  language = 'EN';
  toggleNavBar() {
    this.toggleNav = !this.toggleNav;

    if (!this.toggleNav) {
      document
        .getElementsByClassName('sideNavBar')[0]
        .classList.add('initialNavbarPosition');
      document
        .getElementsByClassName('sideNavBar')[0]
        .classList.remove('finalNavbarPosition');
      document.getElementsByClassName('overlay2')[0].classList.add('hidden');
      document.getElementsByClassName('overlay2')[0].classList.remove('show');
    }
    if (this.toggleNav) {
      document
        .getElementsByClassName('sideNavBar')[0]
        .classList.remove('initialNavbarPosition');
      document
        .getElementsByClassName('sideNavBar')[0]
        .classList.add('finalNavbarPosition');

      document.getElementsByClassName('overlay2')[0].classList.add('show');
      document.getElementsByClassName('overlay2')[0].classList.remove('hidden');
    }
  }

  toggleResponsiveNav = false;
  toggleResponsiveNavBar() {
    this.toggleResponsiveNav = !this.toggleResponsiveNav;
    if (!this.toggleResponsiveNav) {
      document
        .getElementsByClassName('responsiveCtr')[0]
        .classList.add('hidden');
      document
        .getElementsByClassName('responsiveCtr')[0]
        .classList.remove('show');
    }

    if (this.toggleResponsiveNav) {
      document.getElementsByClassName('responsiveCtr')[0].classList.add('show');
      document
        .getElementsByClassName('responsiveCtr')[0]
        .classList.remove('hidden');
    }
  }

  getLanguage(lang: any) {
    if (lang == 'english') {
      this.language = 'EN';
    }
    if (lang == 'hindi') {
      this.language = 'HI';
    }

    this.langService.languageBehaviour.next(lang);
  }

  page = false;
  pageChange() {
    this.page = !this.page;
    if (this.page) {
      document.getElementsByClassName('secondPage')[0].classList.add('show');
      document
        .getElementsByClassName('secondPage')[0]
        .classList.remove('hidden');

      document.getElementsByClassName('firstPage')[0].classList.add('hidden');
      document.getElementsByClassName('firstPage')[0].classList.remove('show');
    }

    if (!this.page) {
      document.getElementsByClassName('firstPage')[0].classList.add('show');
      document
        .getElementsByClassName('firstPage')[0]
        .classList.remove('hidden');

      document.getElementsByClassName('secondPage')[0].classList.add('hidden');
      document.getElementsByClassName('secondPage')[0].classList.remove('show');
    }
  }
}
