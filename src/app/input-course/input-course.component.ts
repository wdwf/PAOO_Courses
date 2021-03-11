import { Component, EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-input-course',
  templateUrl: './input-course.component.html',
  styleUrls: ['./input-course.component.css']
})
export class InputCourseComponent {

  @Output() onClickInputCourse = new EventEmitter();

  AddCourse(nameCourse, workload) {
    const course = {
      nameCourse, workload
    }
    this.onClickInputCourse.emit(course);
  }

}
