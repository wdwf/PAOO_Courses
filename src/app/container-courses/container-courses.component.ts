import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-courses',
  templateUrl: './container-courses.component.html',
  styleUrls: ['./container-courses.component.css']
})
export class ContainerCoursesComponent implements OnInit {

  title = "COURSES WEEK"

  constructor() { }

  ngOnInit(): void {
  }

}
