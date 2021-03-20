import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../shared/courses.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {

  public monthdata: any = [];
  public grades: any = [];
  public selectedValue: number = 0;
  public boards: any;
  public sessions:any;
  public selectedItem: any;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.getMonthdata();
    this.poppulategradedata(this.selectedValue);
  }

  poppulategradedata(index) {
    this.grades = this.monthdata[index];
      this.boards = this.grades.boards;
      this.boards = Object.keys(this.boards).map(key => ({type: key, value: this.boards[key]}));

      for(let b = 0; b < this.boards.length; b++) {
        const values = Object.keys(this.boards[b].value);
        this.boards[b]["sessions"] = [];
        for(let c = 0; c < values.length; c++) {
           const sessions = {...this.boards[b].value[values[c]], name: values[c] }
           this.boards[b]["sessions"].push(sessions);
        }
      }
      this.getBoardData(0);
      // console.log(this.boards);
  }

  getBoardData(index) {
    this.sessions = this.boards[index].sessions;
    this.selectedItem = index;
  }

  getMonthdata() {
    this.monthdata = this.coursesService.getMonths()[0];
  }

  onGradeSelection(val:any) {
    this.selectedValue = +val;
    this.poppulategradedata(this.selectedValue)
  }
}
