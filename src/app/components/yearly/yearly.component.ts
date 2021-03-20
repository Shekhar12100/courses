import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../shared/courses.service';

@Component({
  selector: 'app-yearly',
  templateUrl: './yearly.component.html',
  styleUrls: ['./yearly.component.scss']
})
export class YearlyComponent implements OnInit {

  public yeardata: any = [];
  public grades: any = [];
  public selectedValue: number = 0;
  public boards: any;
  public sessions:any;
  public selectedItem: any;
  public value: any;
  public syllabusDivWidth: any;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.getYeardata();
    this.poppulategradedata(this.selectedValue);
  }

  poppulategradedata(index) {
    this.grades = this.yeardata[index];

      this.boards = this.grades.boards;
      this.boards = Object.keys(this.boards).map(key => ({type: key, value: this.boards[key]}));

      for(let b = 0; b < this.boards.length; b++) {

        const syllabus = this.boards[b].value.syllabus;
        if(typeof(syllabus) == "string") {
          this.syllabusDivWidth = "100%";
          this.boards[b].value = {...this.boards[b].value, sessions: [{"name" : "Introduction", data:  syllabus }]}
        } else {
          this.syllabusDivWidth = "30%";
          this.boards[b].value["sessions"] = [];

          for(let c = 0; c < syllabus.length; c++) {
            const obj = syllabus[c];
            const values = Object.keys(obj);

            for(let d = 0; d < values.length; d++) {
              this.boards[b].value.sessions.push({"name" : values[d], data:  obj[values[d]] });
            }
          }
        }
      }
      this.getBoardData(0);

      // console.log(this.boards);


  }

  getBoardData(index) {
    this.value = this.boards[index].value;
    this.selectedItem = index;
  }

  getYeardata() {
    this.yeardata = this.coursesService.getYearly()[1];
  }

  onGradeSelection(val:any) {

    this.selectedValue = +val;
    this.poppulategradedata(this.selectedValue)

  }

}
