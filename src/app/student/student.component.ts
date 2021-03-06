import { Component, OnInit } from '@angular/core';
import {Student} from '../model/student';
import {STUDENTS} from '../data/studentData';
import {$} from 'protractor';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public gender: string;
  public address: string;
  public language: string;

  public showHeading: boolean;
  public students: Student[];

  constructor() {
    this.firstName = 'firstName';
    this.lastName = 'lastName';
    this.gender = 'gender';
    this.address = 'address';
    this.language = 'language';

    this.showHeading = true;
    this.students = STUDENTS;
  }

  ngOnInit(): void {
  }


}
