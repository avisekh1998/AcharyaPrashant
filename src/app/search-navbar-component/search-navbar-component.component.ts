import { Component, OnInit } from '@angular/core';
import { SearchNavbarService } from './search-navbar.service';
import { LanguageServiceService } from '../common/language-service.service';

@Component({
  selector: 'app-search-navbar-component',
  templateUrl: './search-navbar-component.component.html',
  styleUrls: ['./search-navbar-component.component.css'],
})
export class SearchNavbarComponentComponent implements OnInit {
  searchNavData: Array<any> = [];
  optionsSelect: any = [];
  language = 'english';

  constructor(
    private searchNavBar: SearchNavbarService,
    private languageService: LanguageServiceService
  ) {}

  ngOnInit(): void {
    this.getLanguage();

    this.searchNavBar.fetchSearchNavbarData().subscribe(
      (response) => {
        let obj = {};
        if (response) {
          this.searchNavData = response;
          this.optionsSelect = Array.from(this.searchNavData);
          this.optionsSelect.splice(1);
          console.log(this.optionsSelect);

          let elem = document.getElementsByClassName('overlay')[0];
          let elem2 = document.getElementsByClassName('mainDropdown')[0];
          elem.classList.add('hidden');
          elem2.classList.add('hidden');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getChildPopup(hasChildren: any, index: any, parent: any) {
    let arr = Array.from(this.searchNavData);
    if (hasChildren) {
      let temp = [];
      for (let i = 0; i < arr.length; i++) {
        if (i <= index + 1) {
          temp.push(arr[i]);
        }
      }

      let arrDummy = [];
      for (let j = 0; j < temp[index + 1].length; j++) {
        if (parent + 1 == temp[index + 1][j].parent) {
          arrDummy.push(temp[index + 1][j]);
        }
      }
      temp[index + 1] = arrDummy;
      this.optionsSelect = temp;
    }
  }

  toggleNavbar() {
    let elem = document.getElementsByClassName('overlay')[0];
    let elem2 = document.getElementsByClassName('mainDropdown')[0];
    elem.classList.remove('show');
    elem.classList.add('hidden');

    elem2.classList.remove('show');
    elem2.classList.add('hidden');

    this.initialiseTheArray();
  }

  toggleTheDropDown() {
    let elem = document.getElementsByClassName('overlay')[0];
    let elem2 = document.getElementsByClassName('mainDropdown')[0];
    elem.classList.add('show');
    elem2.classList.add('show');
  }

  getLanguage() {
    this.languageService.languageBehaviour.subscribe((data) => {
      if (data) {
        if (data == 'english') {
          this.language = 'english';
        }
        if (data == 'hindi') {
          this.language = 'hindi';
        }
      }
    });
  }

  initialiseTheArray() {
    this.optionsSelect = Array.from(this.searchNavData);
    this.optionsSelect.splice(1);
  }
}
