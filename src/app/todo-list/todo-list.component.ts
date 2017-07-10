import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from "app/todo";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos"><todo [todo]="todo" (click)="todoClicked.emit(todo.id)"></todo></li>
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
