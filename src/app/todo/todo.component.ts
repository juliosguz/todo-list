import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo;

  customTodo = true;

  constructor() { }

  ngOnInit() {
    console.log(this.todo.title);
  }

  onDelete() {
    console.log('onDelete!!!', this.todo);
  }
}
