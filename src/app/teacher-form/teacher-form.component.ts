import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Student} from '../model/student';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {


  teachers = [];

  constructor() { }

  ngOnInit(): void {
  }
  createNewTeacher(f: NgForm): void{
    this.teachers.push(new Student(f.value.firstName, f.value.lastName, f.value.gender, f.value.address, f.value.language));
  }


}
