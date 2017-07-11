import { Injectable } from '@angular/core';
import { Todo } from "app/todo";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

export const TODOS_VISIBILITY_MODES = {
  all: 'All',
  open: 'Open',
  completed: 'Completed'
};

@Injectable()
export class TodosVisibilityService {
  private _currentFilter: BehaviorSubject<string>;

  constructor() {
    this._currentFilter = new BehaviorSubject<string>('all');
  }

  setFilter(value: string) {
    this._currentFilter.next(value);
  }

  getFilter(): Observable<string> {
    return this._currentFilter.asObservable();
  }

  filterTodos(todos: Todo[]): Todo[] {
    switch (this._currentFilter.getValue()) {
      case 'all': return todos;
      case 'open': return todos.filter(todo => !todo.completed);
      case 'completed': return todos.filter(todo => todo.completed);
    }
  }

  isFilterSelected(filter: string) {
    return this._currentFilter.getValue() == filter;
  }
}