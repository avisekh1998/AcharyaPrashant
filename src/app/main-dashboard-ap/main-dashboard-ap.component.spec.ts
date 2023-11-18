import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardAPComponent } from './main-dashboard-ap.component';

describe('MainDashboardAPComponent', () => {
  let component: MainDashboardAPComponent;
  let fixture: ComponentFixture<MainDashboardAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDashboardAPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDashboardAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
