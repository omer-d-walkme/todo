import { Injectable } from '@angular/core';
import { Todo } from "app/todo";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

export const TODOS_VISIBILITY_MODES = {
  all: 'All',
  open: 'Open',
  completed: 'Completed'
};

@Injectable()
export class TodosVisibilityService {
  private _currentFilter: string;
  private _updateFilter: Subject<string>;

  constructor() {
    this._updateFilter = new Subject<string>();

    this.setFilter('all');
  }

  setFilter(value: string) {
    this._currentFilter = value;
    this._updateFilter.next(this._currentFilter);
  }

  getFilter(): Observable<string> {
    return this._updateFilter.asObservable();
  }

  filterTodos(todos: Todo[]): Todo[] {
    switch (this._currentFilter) {
      case 'all': return todos;
      case 'open': return todos.filter(todo => !todo.completed);
      case 'completed': return todos.filter(todo => todo.completed);
    }
  }
}