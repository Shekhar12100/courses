import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { coursesData } from './data/coursesdata';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesData = coursesData;
  constructor(private http: HttpClient) { }

  getMonths() {
    // console.log(this.coursesData)
    return [...this.coursesData.map(data => {
      return data.monthly
    })];
  }

  getYearly() {
    return [...this.coursesData.map(data => {
      return data.yearly
    })];
  }

}
