import { Component, Input } from '@angular/core';
import { Todo } from "app/todo";

@Component({
  selector: 'app-todo',
  template: `<span [style.text-decoration]="getTodoTextDecoration()">{{todo.text}}</span>`,
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo;

  getTodoTextDecoration() {
    return this.todo.completed ? 'line-through' : 'none';
  }
}
