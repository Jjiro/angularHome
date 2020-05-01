import { Component, OnInit } from '@angular/core';
import {Student} from '../model/student';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  students = [];

  constructor() { }

  ngOnInit(): void {
  }
  createNewStudent(f: NgForm): void{
    this.students.push(new Student(f.value.firstName, f.value.lastName, f.value.gender, f.value.address, f.value.language));
  }

}
