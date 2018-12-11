import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo;

  @Output() deleteTodo = new EventEmitter();
  @Output() updateTodo = new EventEmitter();

  customTodo = true;

  constructor() { }

  ngOnInit() {}

  onDelete() {
    this.deleteTodo.emit({
      id: this.todo.id
    });
  }

  updateTodoStatus() {
    this.updateTodoData({
      status: this.todo.status
    });
  }

  updateTodoTitle(event) {
    if (event.key === 'Enter') {
      this.updateTodoData({
        title: this.todo.title
      });
    }
  }

  private updateTodoData(data) {
    this.updateTodo.emit({
      id: this.todo.id,
      ...data
    });
  }
}
