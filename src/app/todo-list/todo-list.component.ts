import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from "app/todo";

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos"><app-todo [todo]="todo" (click)="todoClicked.emit(todo.id)"></app-todo></li>
    </ul>
  `,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: Todo[];
  @Output() todoClicked: EventEmitter<number>;

  constructor() {
    this.todoClicked = new EventEmitter<number>();
  }
}
