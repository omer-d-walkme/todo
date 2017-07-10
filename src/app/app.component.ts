import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodosService } from "app/todos.service";
import { Todo } from "app/todo";
import { Observable } from "rxjs/Observable";
import { TodosVisibilityService } from "app/todos-visibility.service";
import { Subscription } from "rxjs/Subscription";

import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  newTodo: Todo;
  visibleTodos: Observable<Todo[]>;
  currentFilter: string;

  private _allTodos: Todo[];
  private _currentFilterSubscription: Subscription;

  constructor(
    private todosService: TodosService,
    private todosVisibilityService: TodosVisibilityService
  ) {
    this.newTodo = {};
  }

  ngOnInit() {
    this.visibleTodos = Observable
      .merge(this.todosService.getAll(), this.todosVisibilityService.getFilter())
      .map(update => {
        if (update instanceof Array) {
          this._allTodos = update;
        }
        
        return this.todosVisibilityService.filterTodos(this._allTodos);
      });
    
      this._currentFilterSubscription = this
        .todosVisibilityService
        .getFilter()
        .subscribe(filter => this.currentFilter = filter);
  }

  ngOnDestroy() {
    this._currentFilterSubscription.unsubscribe();
  }

  addTodo() {
    this.todosService.createTodo(this.newTodo).then(() => {
      this.newTodo = {};
    });
  }

  toggleTodo(todoId: number) {
    this.todosService.toggleTodo(todoId);
  }

  getTodoTextDecoration(todo: Todo) {
    return todo.completed ? 'line-through' : 'none';
  }

  isFilterSelected(filter: string): boolean {
    return this.currentFilter == filter;
  }

  applyFilter(filter: string) {
    this.todosVisibilityService.setFilter(filter);
  }
}
