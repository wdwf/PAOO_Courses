import { Component} from '@angular/core';

@Component({
  selector: 'app-container-courses',
  templateUrl: './container-courses.component.html',
  styleUrls: ['./container-courses.component.css']
})
export class ContainerCoursesComponent {

  title = "Courses project"

  courses = [
    {
      nameCourse: "Javascript",
      workload: "12h00"
    },
    {
      nameCourse: "Redes",
      workload: "16h00"
    },
  ]

  addCourse(course) {
    this.courses.push(course);
  }

}
