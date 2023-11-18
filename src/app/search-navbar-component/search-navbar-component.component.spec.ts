import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNavbarComponentComponent } from './search-navbar-component.component';

describe('SearchNavbarComponentComponent', () => {
  let component: SearchNavbarComponentComponent;
  let fixture: ComponentFixture<SearchNavbarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchNavbarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchNavbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
