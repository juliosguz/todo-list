import { Component, OnInit } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

import { map } from 'rxjs/operators';

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
    this.todos$ = this.todosCollection
      .snapshotChanges()
      .pipe(
        map(todos => {
          return todos.map(todo => {
            const id = todo.payload.doc.id;
            const data = todo.payload.doc.data();
            return {
              id,
              ...data
            };
          });
        })
      );
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

  onDelete(event) {
    this.afs.doc(`todos/${event.id}`).delete();
  }

  onUpdate(event) {
    const id = event.id;
    const data = event;
    delete data.id;
    this.afs.doc(`todos/${id}`).update(data);
  }

}
