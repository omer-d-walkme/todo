import { Component, OnInit } from '@angular/core';
import { TodosService } from "app/todos.service";
import { Todo } from "app/todo";
import { Observable } from "rxjs/Observable";
import { TodosVisibilityService } from "app/todos-visibility.service";

import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newTodo: Todo;
  visibleTodos: Observable<Todo[]>;

  private _allTodos: Todo[];

  constructor(
    private todosService: TodosService,
    private todosVisibilityService: TodosVisibilityService
  ) {
    this.newTodo = {};
  }

  ngOnInit() {
    this.visibleTodos = Observable
      .combineLatest(
        this.todosService.getAll(),
        this.todosVisibilityService.getFilter(),
        (todos, filter) => this.todosVisibilityService.filterTodos(todos)
      );
  }

  addTodo() {
    this
      .todosService
      .createTodo(this.newTodo)
      .then(() => this.newTodo = {});
  }

  toggleTodo(todoId: number) {
    this.todosService.toggleTodo(todoId);
  }

  isFilterSelected(filter: string): boolean {
    return this.todosVisibilityService.isFilterSelected(filter);
  }

  applyFilter(filter: string) {
    this.todosVisibilityService.setFilter(filter);
  }
}
