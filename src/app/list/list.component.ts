import { Component, OnInit } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todosCollection: AngularFirestoreCollection;
  todos$;

  constructor(
    private afs: AngularFirestore
  ) {
    this.todosCollection = this.afs.collection('todos');
    this.todos$ = this.todosCollection.valueChanges();
  }

  ngOnInit() {
  }

  save(formData: NgForm) {
    if (confirm('Estas seguro de agregarlo?')) {
      this.todosCollection.add({
        title: formData.value.newTodo,
        status: false
      });
      formData.resetForm();
    }
  }

}
