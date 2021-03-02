import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerCoursesComponent } from './container-courses/container-courses.component';
import { CardCourseComponent } from './card-course/card-course.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerCoursesComponent,
    CardCourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
