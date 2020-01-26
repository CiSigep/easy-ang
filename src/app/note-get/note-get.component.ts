import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-note-get',
  templateUrl: './note-get.component.html',
  styleUrls: ['./note-get.component.css']
})
export class NoteGetComponent implements OnInit {
  private url = 'http://localhost:8080';
  data: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getNotes() {
    this.http.get<string>(this.url + '/api/notes').subscribe(res => {
      this.data = JSON.stringify(res);
    });
  }

}
