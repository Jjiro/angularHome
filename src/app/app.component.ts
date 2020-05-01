import {Component, TemplateRef} from '@angular/core';
import {STUDENTS} from './data/studentData';
import {TEACHERS} from './data/teacherData';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularHome';
  students = STUDENTS;
  teachers = TEACHERS;
  numberOfStudents = this.students.length;
  numberOfTeachers = this.teachers.length;

  public modalRef: BsModalRef; // {1}
  constructor(private modalService: BsModalService) {} // {2}

  public openModalStudent(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
  public openModalTeacher(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
}
