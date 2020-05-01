import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';
import {Route, Routes, RouterModule} from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import {FormsModule} from '@angular/forms';
// @ts-ignore
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
// @ts-ignore
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';


const appRoutes: Routes = [
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'addStudent',
    component: StudentFormComponent
  },
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'addTeacher',
    component: TeacherFormComponent
  },
];
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    StudentFormComponent,
    TeacherFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule,
    ModalModule.forRoot(),
    AppBootstrapModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
