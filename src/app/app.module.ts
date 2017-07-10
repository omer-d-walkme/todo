import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import { TodosInMemoryWebApi } from './todos-in-memory-web-api';
import { AppComponent } from './app.component';
import { TodosService } from './todos.service';
import { TodosVisibilityService } from './todos-visibility.service';

@NgModule({
  declarations: [
    AppComponent
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
