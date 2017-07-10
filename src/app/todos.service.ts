import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Todo } from "app/todo";

import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class TodosService {
  private _todos: Todo[];
  private _updateTodos: Subject<Todo[]>;
  
  constructor(
    private http: Http
  ) {
    this._updateTodos = new Subject<Todo[]>();

    this.getTodosFromServer();
  }

  getAll(): Observable<Todo[]> {
    return this._updateTodos.asObservable();
  }

  createTodo(todo: Todo): Promise<Todo> {
    return this
      .http
      .post(`api/todos`, todo)
      .toPromise()
      .then(res => {
        this.getTodosFromServer();

        return res.json();
      });
  }

  toggleTodo(todoId: number): Promise<void> {
    let toggledTodo = this._todos.filter(todo => todo.id == todoId)[0];

    return this
      .http
      .post(`api/todos`, {...toggledTodo, completed: !toggledTodo.completed})
      .toPromise()
      .then(res => {
        this.getTodosFromServer();

        return res.json();
      });
  }

  private getTodosFromServer() {
    this
      .http
      .get('api/todos')
      .toPromise()
      .then(res => {
        this._todos = res.json().data;
        this._updateTodos.next(this._todos);
      });
  }
}