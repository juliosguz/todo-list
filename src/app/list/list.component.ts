import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todos = [
    {
      title: 'Mi primera tarea',
      status: false
    },
    {
      title: 'Mi segunda tarea',
      status: false
    },
    {
      title: 'Mi primera transmision',
      status: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
