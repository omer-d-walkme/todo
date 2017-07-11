import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Todo } from "app/todo";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodosService {
  private _todos: BehaviorSubject<Todo[]>;
  
  constructor(
    private http: Http
  ) {
    this._todos = new BehaviorSubject<Todo[]>([]);

    this.getTodosFromServer();
  }

  getAll(): Observable<Todo[]> {
    return this._todos.asObservable();
  }

  createTodo(todo: Todo): Promise<Todo> {
    return this
      .http
      .post(`api/todos`, todo)
      .toPromise()
      .then(res => {
        let createdTodo = res.json().data;

        this._todos.getValue().push(res.json().data);

        return res.json().data;
      });
  }

  toggleTodo(todoId: number): Promise<any> {
    let toggledTodo = this._todos.getValue().filter(todo => todo.id == todoId)[0];

    toggledTodo.completed = !toggledTodo.completed;

    return this
      .http
      .post(`api/todos`, toggledTodo)
      .toPromise();
  }

  private getTodosFromServer() {
    this
      .http
      .get('api/todos')
      .toPromise()
      .then(res => this._todos.next(res.json().data));
  }
}