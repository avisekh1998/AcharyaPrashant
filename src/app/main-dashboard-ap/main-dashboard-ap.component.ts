import { Component, OnInit } from '@angular/core';
import { DashBoardServiceService } from '../mainDashboardAPServices/dash-board-service.service';

@Component({
  selector: 'app-main-dashboard-ap',
  templateUrl: './main-dashboard-ap.component.html',
  styleUrls: ['./main-dashboard-ap.component.css'],
})
export class MainDashboardAPComponent implements OnInit {
  dashBoardData: Array<any> = [];
  dashBoardImg = '';
  constructor(private dashBoardService: DashBoardServiceService) {}
  ngOnInit(): void {
    this.fetchDataToPopulate();
  }

  fetchDataToPopulate() {
    this.dashBoardService.fetchDashBoardDetails().subscribe(
      (response) => {
        let obj = {
          details: response.details,
          courses: response.courses,
          relatedContent: response.relatedContent,
          relatedTags: response.relatedTags,
        };
        this.dashBoardData.push(obj);
        this.dashBoardImg =
          this.dashBoardData[0].details.thumbnail.domain +
          '/' +
          this.dashBoardData[0].details.thumbnail.basePath +
          '/' +
          this.dashBoardData[0].details.thumbnail.qualities[0] +
          '/' +
          this.dashBoardData[0].details.thumbnail.key;
        console.log(this.dashBoardData);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCourseHours(hours: any) {
    let time = Number(hours) * 60;
    let timeHours = Math.trunc(time / 60);
    let timeMin = Math.ceil(time % 60);
    if (timeHours > 0) {
      return timeHours + '  hours ' + timeMin + '  minutes';
    } else {
      return timeMin + '  minutes';
    }
  }

  getImgSrc(relatedCont: any) {
    let url =
      relatedCont.thumbnail.domain +
      '/' +
      relatedCont.thumbnail.basePath +
      '/' +
      relatedCont.thumbnail.qualities[0] +
      '/' +
      relatedCont.thumbnail.key;
    return url;
  }
}
