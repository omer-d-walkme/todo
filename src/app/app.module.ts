import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import { TodosInMemoryWebApi } from './todos-in-memory-web-api';
import { AppComponent } from './app.component';
import { TodosService } from './todos.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FilterLinkComponent } from './filter-link/filter-link.component';
import { TodoFiltersComponent } from './todo-filters/todo-filters.component';
import { TodosVisibilityService } from './todos-visibility.service';
import { LinkComponent } from './link/link.component';
import { VisibleTodoListComponent } from './visible-todo-list/visible-todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    AddTodoComponent,
    FilterLinkComponent,
    TodoFiltersComponent,
    LinkComponent,
    VisibleTodoListComponent
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
