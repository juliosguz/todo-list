import { Component, OnInit } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todos;

  constructor(
    private afs: AngularFirestore
  ) {
    this.todos = this.afs.collection('todos').valueChanges();
    console.log(this.todos);
  }

  ngOnInit() {
  }

}
