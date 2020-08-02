import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit {
  data;

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getSchools();
  }

  getSchools() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    this.http
      .get(`https://run.mocky.io/v3/58df8440-eb8f-4d21-abb4-78a31487d18b`, {
        headers: headers
      }).subscribe(
      (data: any) => {
        this.data = data;
        return data;
      },
      (error: any) => {
        console.log('erroalert: ', error);
      }
    );
  }

}
