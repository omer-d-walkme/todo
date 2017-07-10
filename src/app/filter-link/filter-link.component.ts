import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TodosVisibilityService, TODOS_VISIBILITY_MODES } from "app/todos-visibility.service";

import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'filter-link',
  template: `
    <app-link [isActive]="isSelected | async" (click)="applyFilter()">
      <span active>{{displayName}}</span>
      <span inActive>{{displayName}}</span>
    </app-link>
  `,
  styleUrls: ['./filter-link.component.css']
})
export class FilterLinkComponent implements OnInit {
  @Input() filter: string;
  isSelected: Observable<boolean>;

  constructor(
    private todosVisibilityService: TodosVisibilityService
  ) {}

  get displayName(): string {
    return TODOS_VISIBILITY_MODES[this.filter];
  }

  ngOnInit() {
    this.isSelected = this.todosVisibilityService.getFilter().map(filter => filter == this.filter);
  }

  applyFilter() {
    this.todosVisibilityService.setFilter(this.filter);
  }
}
