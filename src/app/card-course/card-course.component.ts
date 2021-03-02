import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.css']
})
export class CardCourseComponent implements OnInit {

  course = "Framework Angular";
  hour = "13h10";

  constructor() { }

  ngOnInit(): void {
  }

}
