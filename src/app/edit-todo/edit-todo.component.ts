import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from "app/todo";

@Component({
  selector: 'app-edit-todo',
  template: `
    <form (submit)="saveClicked.emit()">
      <input [(ngModel)]="todo.text" name="todoText" />
      <button type="submit">Save</button>
    </form>
  `,
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() saveClicked: EventEmitter<void>;

  constructor() {
    this.saveClicked = new EventEmitter<void>();
  }

  ngOnInit() {
  }

}
