import { Component, OnInit } from '@angular/core';
import {Teacher} from '../model/teacher';
import {TEACHERS} from '../data/teacherData';
import {$} from 'protractor';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public gender: string;
  public address: string;
  public language: string;

  public showHeading: boolean;
  public teachers: Teacher[];

  constructor() {
    this.firstName = 'firstName';
    this.lastName = 'lastName';
    this.gender = 'gender';
    this.address = 'address';
    this.language = 'language';

    this.showHeading = true;
    this.teachers = TEACHERS;
  }

  ngOnInit(): void {
  }

}
