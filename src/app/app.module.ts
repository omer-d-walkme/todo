import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import { TodosInMemoryWebApi } from './todos-in-memory-web-api';
import { AppComponent } from './app.component';
import { TodosService } from './todos.service';
import { TodosVisibilityService } from './todos-visibility.service';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { LinkComponent } from './link/link.component';
import { FilterLinkComponent } from './filter-link/filter-link.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    EditTodoComponent,
    LinkComponent,
    FilterLinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(TodosInMemoryWebApi)
  ],
  providers: [
    TodosService,
    TodosVisibilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
