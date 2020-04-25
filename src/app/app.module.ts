import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
