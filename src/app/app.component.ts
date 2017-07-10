import { Component } from '@angular/core';
import { TodosService } from "app/todos.service";
import { Todo } from "app/todo";

@Component({
  selector: 'app-root',
  template: `
    <div>
      <add-todo></add-todo>
      <todo-filters></todo-filters>
      <visible-todo-list></visible-todo-list>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
