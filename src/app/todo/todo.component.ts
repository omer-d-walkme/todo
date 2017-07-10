import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from "app/todo";

@Component({
  selector: 'todo',
  template: `<span [style.text-decoration]="getTodoTextDecoration()">{{todo.text}}</span>`,
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo;

  getTodoTextDecoration(): string {
    return this.todo.completed ? 'line-through' : 'none';
  }
}