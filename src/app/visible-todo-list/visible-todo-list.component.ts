import { Component, OnInit } from '@angular/core';
import { TodosVisibilityService } from "app/todos-visibility.service";
import { Todo } from "app/todo";
import { TodosService } from "app/todos.service";

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'visible-todo-list',
  template: `
    <todo-list [todos]="visibleTodos | async" (todoClicked)="toggleTodo($event)"></todo-list>
  `,
  styleUrls: ['./visible-todo-list.component.css']
})
export class VisibleTodoListComponent implements OnInit {
  visibleTodos: Observable<Todo[]>;

  private _allTodos: Todo[];

  constructor(
    private todosService: TodosService,
    private todosVisibilityService: TodosVisibilityService
  ) {}

  ngOnInit() {
    this.visibleTodos = Observable
      .merge(this.todosService.getAll(), this.todosVisibilityService.getFilter())
      .map(update => {
        if (update instanceof Array) {
          this._allTodos = update;
        }
        
        return this.todosVisibilityService.filterTodos(this._allTodos);
      });
  }

  toggleTodo(todoId: number) {
    this.todosService.toggleTodo(todoId);
  }
}
