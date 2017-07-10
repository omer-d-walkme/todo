import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from "app/todo";
import { TodosService } from "app/todos.service";

@Component({
  selector: 'add-todo',
  template: `
    <form>
      <input [(ngModel)]="todo.text" name="todoText" />
      <button type="submit" (click)="addTodo()">Add</button>
    </form>
  `,
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  todo: Todo;

  constructor(
    private todosService: TodosService
  ) {
    this.todo = {};
  }

  addTodo() {
    this.todosService.createTodo(this.todo).then(() => {
      this.todo = {};
    });
  }
}
